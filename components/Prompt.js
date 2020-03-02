import React from 'react';
import { StyleSheet, View } from 'react-native';
import PromptText from "../components/PromptText";
import Colors from '../constants/Colors';
import Layout from "../constants/Layout";

export default function Prompt(props) {
  return (
    <View style={styles.promptContainer}>
      <PromptText style={styles.text}>{props.children}</PromptText>
      {props.includeHR && <View style={styles.hr}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  promptContainer: {
    textAlign: "left",
  },
  text: {
    marginHorizontal: Layout.margin,
  },
  hr: {
    height: 20,
    borderBottomColor: Colors.lightBlue,
    borderBottomWidth: 2,
  }
});
