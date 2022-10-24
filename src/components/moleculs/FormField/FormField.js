import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Label} {
    margin: 10px 0;
  }
`;

const FormField = React.forwardRef(({ onChange, value, label, name, id, type = 'text', ...props }, ref) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input ref={ref} name={name} id={id} type={type} value={value} onChange={onChange} data-testid={label} checked={value} />
    </Wrapper>
  );
});

FormField.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
