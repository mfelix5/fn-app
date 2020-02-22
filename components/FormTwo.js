import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FormThree } from "../components/FormThree";
import { AppButton } from "../components/AppButton";
import { AppModal } from "./AppModal";
import { HeadingText } from "./HeadingText";

export function FormTwo({ setFormTwoOpen, system }) {
  const [formThreeOpen, setFormThreeOpen] = useState(false);
  return (
    <AppModal onBack={() => setFormTwoOpen(false)}>
      <HeadingText>Form 2</HeadingText>
      <AppButton
        handlePress={() => setFormThreeOpen(true)}
        buttonText="Ok, Next!"
      />
      {formThreeOpen && <FormThree setFormThreeOpen={setFormThreeOpen} />}
    </AppModal>
  );
}

const styles = StyleSheet.create({
});
