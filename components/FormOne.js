import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { FormTwo } from "./FormTwo";
import { AppModal } from "./AppModal";
import { Prompt } from "./Prompt";
import { SystemButtons } from "./SystemButtons";

export function FormOne({ setFormOneOpen }) {
  const [formTwoOpen, setFormTwoOpen] = useState(false);
  const [system, setSystem] = useState('');
  return (
    <AppModal onBack={() => setFormOneOpen(false)}>
      <View style={styles.formWrapper}>
        <Prompt>Which transit system are you traveling on?</Prompt>
        <SystemButtons style={{}} setSystem={setSystem} setFormTwoOpen={setFormTwoOpen}/>
      </View>
      {formTwoOpen && <FormTwo setFormTwoOpen={setFormTwoOpen} system={system}/>}
    </AppModal>
  );
}

const styles = StyleSheet.create({
  formWrapper: {
    width: "100%",
    flex: 1,
    justifyContent: "space-around",
  }
});