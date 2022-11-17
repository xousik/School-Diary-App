import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, NameInfoWrapper, StyledAverage } from './UsersListItem.styles';

const UsersListItem = ({ userData: { average, name, attendance = '0%', id }, deleteUser, ...props }) => {
  return (
    <Wrapper {...props}>
      <StyledAverage value={average}>{average}</StyledAverage>
      <NameInfoWrapper>
        <p>
          {name}
          <DeleteButton onClick={(event) => deleteUser(event, id)} />
        </p>
        <p>attendance: {attendance}</p>
      </NameInfoWrapper>
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
