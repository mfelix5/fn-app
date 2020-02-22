import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { FormTwo } from "./FormTwo";
import { AppModal } from "./AppModal";
import { HeadingText } from "./HeadingText";
import { SystemButtons } from "./SystemButtons";

export function FormOne({ setFormOneOpen }) {
  const [formTwoOpen, setFormTwoOpen] = useState(false);
  const [system, setSystem] = useState('');
  return (
    <AppModal onBack={() => setFormOneOpen(false)}>
      <View style={styles.formWrapper}>
        <HeadingText style={{}} >Which transit system are you traveling on?</HeadingText>
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