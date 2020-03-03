import React from "react";
import { StyleSheet, View } from "react-native";
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
    <FormScreenTemplate
      onBack={() => {props.navigation.goBack()}}
      formNumber={1}
    >
        <View style={styles.prompt}>
          <Prompt>Which transit system?</Prompt>
        </View>
        <SystemButtons style={styles.buttons} onSelect={onSelect}/>
    </FormScreenTemplate>
  );
}

const styles = StyleSheet.create({
  prompt: {
    marginTop: 20,
    marginBottom: 100
  },
});

export default FormOne;