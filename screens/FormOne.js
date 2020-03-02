import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { FormScreenTemplate, Prompt, SystemButtons } from "../components";

const FormOne = props => {
  const onSelect = (system) => {
    props.navigation.navigate({
      routeName: "FormTwo",
      params: {
        system,
      }
    })
  }
  return (
    <FormScreenTemplate onBack={() => {props.navigation.goBack()}} formNumber={1}>
        <Prompt>Which transit system?</Prompt>
        <SystemButtons onSelect={onSelect}/>
    </FormScreenTemplate>
  );
}

const styles = StyleSheet.create({
});

export default FormOne;