import React from "react";
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import Circle from "./Circle";
import { Ionicons } from '@expo/vector-icons';
import Layout from "../constants/Layout";

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
    paddingTop: Platform.OS === "android" ? 40 : 0,
    paddingBottom: 20,
    paddingLeft: Layout.margin,
    backgroundColor: "#0B0D35"
  },
  icon: {
    marginRight: 8,
  }
})
