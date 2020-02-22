import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { ModalHeader } from "./ModalHeader";
import Colors from '../constants/Colors';

export function AppModal(props) {
  return (
    <Modal animationType="slide">
      <ModalHeader onBack={props.onBack}/>
      <View style={styles.modalContainer}>
        {props.children}
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
  }
});