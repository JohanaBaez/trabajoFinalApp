import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface LinkButtonProps {
  text: string;
  onPress: () => void;
  style?: object;
  textStyle?: object;
}

const LinkButton: React.FC<LinkButtonProps> = ({ text, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.linkButton, style]} onPress={onPress}>
      <Text style={[styles.linkText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linkButton: {
    backgroundColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  linkText: {
    fontSize: 16,
    color: '#333',
  },
});

export default LinkButton;