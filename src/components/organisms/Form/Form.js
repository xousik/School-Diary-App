import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import FormField from 'components/moleculs/FormField/FormField';
import { ViewWrapper } from 'components/moleculs/ViewWrapper/ViewWrapper';

const Form = ({ handleAddUser, formInput, handleChange }) => {
  return (
    <>
      <ViewWrapper as="form" onSubmit={handleAddUser}>
        <ul>
          <Title>Add new student</Title>
          <FormField label="Name" id="name" name="name" value={formInput.name} onChange={handleChange} />
          <FormField label="Attendance" id="attendance" name="attendance" value={formInput.attendance} onChange={handleChange} />
          <FormField label="Average" id="average" name="average" value={formInput.average} onChange={handleChange} />
          <Button type="submit">Add</Button>
        </ul>
      </ViewWrapper>
    </>
  );
};

Form.propTypes = {
  handleAddUser: PropTypes.func.isRequired,
  formInput: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Form;
