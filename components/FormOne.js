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
        <Prompt>Which transit system?</Prompt>
        <SystemButtons style={{}} setSystem={setSystem} setFormTwoOpen={setFormTwoOpen}/>
      {formTwoOpen && <FormTwo setFormTwoOpen={setFormTwoOpen} system={system}/>}
    </AppModal>
  );
}

const styles = StyleSheet.create({
});