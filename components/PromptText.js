import React from 'react';
import { StyleSheet, Text } from 'react-native';
import FontSize from "../constants/FontSize";

export default PromptText = ({ children, style}) => {
  return (
    <Text style={{ ...styles.text, ...style}}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.large,
    color: "white",
    fontFamily: 'roboto-medium'
  },
});