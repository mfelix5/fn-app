import React from 'react';
import { StyleSheet, View } from 'react-native';
import FormNavigationHeader from "./FormNavigationHeader";
import Colors from '../constants/Colors';

export default function FormScreenTemplate({ children, formNumber, onBack }) {
  return (
    <>
      <FormNavigationHeader onBack={onBack} formNumber={formNumber}/>
      <View style={styles.modalContainer}>
        <View style={styles.formWrapper}>
          {children}
        </View>
      </View>
</>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.darkBlue
  },
  formWrapper: {
    width: "100%",
    flex: 1,
    justifyContent: "space-around",
  },
});