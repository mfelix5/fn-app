import React from 'react';
import { StyleSheet, View } from 'react-native';
import PromptText from "../components/PromptText";
import Colors from '../constants/Colors';
import Layout from "../constants/Layout";

export default Prompt = ({ children, includeHR }) => {
  return (
    <View style={styles.promptContainer}>
      <PromptText style={styles.text}>{children}</PromptText>
      {includeHR && <View style={styles.hr}/>}
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
