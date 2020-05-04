import React from "react";
import { StyleSheet, View } from "react-native";
import { FormScreenTemplate, Prompt, SystemButtons } from "../components";

export default FormOne = ({ navigation}) => {
  const handlePress = (system) => {
    navigation.navigate({
      routeName: "FormTwo",
      params: {
        system,
      }
    })
  }
  return (
    <FormScreenTemplate
      onBack={() => {navigation.goBack()}}
      formNumber={1}
    >
        <View style={styles.prompt}>
          <Prompt>Which rail system?</Prompt>
        </View>
        <SystemButtons style={styles.buttons} handlePress={handlePress}/>
    </FormScreenTemplate>
  );
}

const styles = StyleSheet.create({
  prompt: {
    marginTop: 20,
    marginBottom: 100
  },
});