import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { AppModal, Prompt, SystemButtons } from "../components";
import FormTwo from "../components/FormTwo";

export default function FormOne({ setFormOneOpen }) {
  const [formTwoOpen, setFormTwoOpen] = useState(false);
  const [system, setSystem] = useState('');
  return (
    <AppModal onBack={() => setFormOneOpen(false)} formNumber={1}>
        <Prompt>Which transit system?</Prompt>
        <SystemButtons style={{}} setSystem={setSystem} setFormTwoOpen={setFormTwoOpen}/>
      {formTwoOpen && <FormTwo setFormTwoOpen={setFormTwoOpen} system={system}/>}
    </AppModal>
  );
}

const styles = StyleSheet.create({
});