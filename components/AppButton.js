import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

export function AppButton(props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.handlePress}
    >
      <Text style={styles.buttonText}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "80%",
    height: 110,
    backgroundColor: Colors.lightBlue,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: Colors.darkBlue,
    fontSize: 36,
    fontFamily: 'roboto-medium'
  },
});