import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import FormNavigationHeader from "./FormNavigationHeader";
import Colors from "../constants/Colors";

export default function FormScreenTemplate({ children, formNumber, onBack }) {
  return (
    <ScrollView style={styles.scrollContainer}>
      <FormNavigationHeader onBack={onBack} formNumber={formNumber} />
      <View style={styles.formWrapper}>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: Colors.darkBlue,
    flex: 1
  },
  formWrapper: {
    flex: 1,
    width: "100%"
  }
});
