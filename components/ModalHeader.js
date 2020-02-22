import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export function ModalHeader({ onBack }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onBack}
      >
        <Ionicons
          name={"md-arrow-back"}
          size={30}
          color={"#FFFFFF"}
        />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "flex-start",
    paddingTop: 50,
    paddingBottom: 20,
    paddingLeft: 15,
    backgroundColor: "#0B0D35"
  }
})
