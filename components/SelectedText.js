import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Colors from '../constants/Colors';

export default function SelectedText({ children }) {

  const displaySelectOrSelectedValue = ( )=> {
    if (children) {
      return (
        <Text style={styles.text}>
         {children}
       </Text>)
    } else {
      return (
        <>
          <Text style={styles.text}>select</Text>
          <Entypo
            style={styles.icon}
            name={"chevron-small-right"}
            size={34}
            color={Colors.lightBlue}
          />
        </>
      )
    }
  }

  return (
    <View style={styles.selectContainer}>{displaySelectOrSelectedValue()}</View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: Colors.lightBlue,
    fontFamily: 'roboto-medium',
  },
  selectContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: 0,
    paddingTop: 0
  }
});