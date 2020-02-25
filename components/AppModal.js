import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import ModalHeader from "../components/ModalHeader";
import Colors from '../constants/Colors';

export default function AppModal({ children, formNumber, onBack }) {
  return (
    <Modal animationType="slide">
      <ModalHeader onBack={onBack} formNumber={formNumber}/>
      <View style={styles.modalContainer}>
        <View style={styles.formWrapper}>
          {children}
        </View>
      </View>
    </Modal>
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