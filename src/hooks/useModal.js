import { useState } from 'react';

const useModal = (initialState = false) => {
  const [isModalOpen, setModalState] = useState(initialState);

  const handleOpenModal = () => setModalState(true);
  const handleCloseModal = () => setModalState(false);

  return {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
  };
};

export default useModal;
