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
    margin: ${({ notes }) => (notes ? '10px 30px' : '10px 0')};
  }
`;

const FormField = React.forwardRef(({ onChange, value, label, name, id, type = 'text', textarea, ...props }, ref) => {
  return (
    <Wrapper notes={props.notes}>
      <Label htmlFor={id}>{label}</Label>
      {textarea ? (
        <textarea label={label} name={name} id={id} value={value} onChange={onChange} {...props} />
      ) : (
        <Input ref={ref} name={name} id={id} type={type} value={value} onChange={onChange} data-testid={label} checked={value} {...props} />
      )}
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
