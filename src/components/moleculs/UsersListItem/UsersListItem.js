import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, NameInfoWrapper } from './UsersListItem.styles';
import { Grade } from 'components/atoms/Grade/Grade';

function UsersListItem({ deleteUser, userData: { average, name, attendance = '0%' } }) {
  return (
    <Wrapper>
      <Grade value={average}>{average}</Grade>
      <NameInfoWrapper>
        <p>{name}</p>
        <p>attendance: {attendance}</p>
      </NameInfoWrapper>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
}

UsersListItem.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
