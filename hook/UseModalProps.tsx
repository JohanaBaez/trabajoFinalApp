import { useState } from 'react';

interface UseModalProps {
  initialVisible: boolean;
  initialLink: { url: string; text: string };
}

interface UseModalReturn {
  modalVisible: boolean;
  newLink: { url: string; text: string };
  setModalVisible: (visible: boolean) => void;
  setNewLink: (link: { url: string; text: string }) => void;
}

export const useModal = (props: UseModalProps): UseModalReturn => {
  const { initialVisible, initialLink } = props;
  const [modalVisible, setModalVisible] = useState(initialVisible);
  const [newLink, setNewLink] = useState(initialLink);

  const handleModalVisible = (visible: boolean) => {
    setModalVisible(visible);
    if (!visible) {
      setNewLink(initialLink);
    }
  };

  return {
    modalVisible,
    newLink,
    setModalVisible: handleModalVisible,
    setNewLink,
  };
};