import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

export default function Savings(props) {
  const { savings, totalCost } = props.savings;

  return (
    <View style={styles.savingsContainer}>
      <Text style={styles.text}>Total</Text>
      <Text style={{...styles.text, ...styles.largeFont}}>${totalCost}</Text>
      <Text style={{...styles.text, ...styles.lightBlue}}>Savings over a monthly ticket: ${savings}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  savingsContainer: {
    marginHorizontal: 15
  },
  text: {
    fontSize: 14,
    color: "white",
    fontFamily: 'roboto-medium',
    marginTop: 8
  },
  largeFont: {
    fontSize: 36,
  },
  lightBlue: {
    color: Colors.lightBlue
  }
});