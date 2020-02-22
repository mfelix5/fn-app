import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Colors from '../constants/Colors';

export function HeadingText(props) {
  return (
    <Text style={{ ...styles.heading, ...props.style}}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 36,
    color: Colors.lightBlue,
    lineHeight: 50,
    fontFamily: 'roboto-medium'
  },
});