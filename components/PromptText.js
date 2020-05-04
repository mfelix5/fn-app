import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default PromptText = ({ children, style}) => {
  return (
    <Text style={{ ...styles.text, ...style}}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    color: "white",
    lineHeight: 50,
    fontFamily: 'roboto-medium'
  },
});