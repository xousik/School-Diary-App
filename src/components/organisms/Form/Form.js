import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/atoms/Button/Button';
import { StyledTitle } from 'components/atoms/ViewTitle/ViewTitle';
import FormField from 'components/moleculs/FormField/FormField';
import { Wrapper } from 'components/atoms/ViewWrapper/ViewWrapper';

const Form = ({ handleAddUser, formInput, handleChange }) => {
  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <ul>
          <StyledTitle>Add new student</StyledTitle>
          <FormField label="Name" id="name" name="name" value={formInput.name} onChange={handleChange} />
          <FormField label="Attendance" id="attendance" name="attendance" value={formInput.attendance} onChange={handleChange} />
          <FormField label="Average" id="average" name="average" value={formInput.average} onChange={handleChange} />
          <Button type="submit">Add</Button>
        </ul>
      </Wrapper>
    </>
  );
};

Form.propTypes = {
  handleAddUser: PropTypes.func.isRequired,
  formInput: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Form;
