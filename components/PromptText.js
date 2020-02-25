import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Colors from '../constants/Colors';

export default function PromptText(props) {
  return (
    <Text style={{ ...styles.text, ...props.style}}>
      {props.children}
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