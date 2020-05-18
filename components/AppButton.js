import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import FontSize from "../constants/FontSize";

export default AppButton = ({ buttonText, handlePress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handlePress}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 90,
    backgroundColor: Colors.lightBlue,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: Colors.darkBlue,
    fontSize: FontSize.large,
    fontFamily: 'roboto-medium'
  },
});