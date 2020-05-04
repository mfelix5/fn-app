import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View } from "react-native";
import FormNavigationHeader from "./FormNavigationHeader";
import Colors from "../constants/Colors";

export default FormScreenTemplate = ({ children, formNumber, onBack }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView>
        <FormNavigationHeader onBack={onBack} formNumber={formNumber} />
        <View style={styles.formWrapper}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.darkBlue,
  },
  formWrapper: {
    flex: 1,
    width: "100%"
  }
});
