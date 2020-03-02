import React from "react";
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Circle } from "./Circle";
import { Ionicons } from '@expo/vector-icons';

export default function FormNavigationHeader({ onBack, formNumber }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onBack}
      >
        <Ionicons
          style={styles.icon}
          name={"md-arrow-back"}
          size={34}
          color={"#FFFFFF"}
        />
      </TouchableOpacity>
      {formNumber && (
        <>
          <Circle white={formNumber >= 1}/>
          <Circle white={formNumber >= 2}/>
          <Circle white={formNumber >= 3}/>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 20,
    paddingLeft: 15,
    backgroundColor: "#0B0D35"
  },
  icon: {
    marginRight: 8,
  }
})
