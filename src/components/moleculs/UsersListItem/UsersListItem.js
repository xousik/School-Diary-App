import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
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
      <Button onClick={() => deleteUser(name)} />
    </Wrapper>
  );
}

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
