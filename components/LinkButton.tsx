import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface LinkButtonProps {
  link: { url: string; text: string };
  onPress: () => void;
}

const LinkButton: React.FC<LinkButtonProps> = ({ link, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{ color: '#333333' }}>{link.text}</Text>
    </TouchableOpacity>
  );
};

export default LinkButton;


