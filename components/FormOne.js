import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { FormTwo } from "./FormTwo";
import { AppModal } from "./AppModal";
import { HeadingText } from "./HeadingText";

export function FormOne({ setFormOneOpen, system }) {
  const [formTwoOpen, setFormTwoOpen] = useState(false);
  return (
    <AppModal onBack={() => setFormOneOpen(false)}>
      <HeadingText>Form One</HeadingText>
      <View style={styles.buttonContainer}>
        <Button title="Next" onPress={() => setFormTwoOpen(true)} />
      </View>
      {formTwoOpen && <FormTwo setFormTwoOpen={setFormTwoOpen}/>}
    </AppModal>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row"
  }
});

const systems = [
  {
    name: "NJT",
    icon: "",
    active: true
  },
  {
    name: "LIRR",
    icon: "",
    active: true
  },
  {
    name: "MN",
    icon: "",
    active: false
  },
  {
    name: "Subway",
    icon: "",
    active: false
  },
  {
    name: "PATH",
    icon: "",
    active: false
  }
];
