import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";
import AppButton from "../components/AppButton";
import PromptText from "../components/PromptText";
import FormOne from "../components/FormOne";

export default function HomeScreen() {
  const [formOneOpen, setFormOneOpen] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <View style={styles.textContainer}>
          <PromptText style={styles.text}>
            Farewise helps you save on your monthly commuting expenses in just
            three steps.
          </PromptText>
        </View>
        <AppButton
          handlePress={() => setFormOneOpen(true)}
          buttonText="Get Going!"
        />
        {formOneOpen && <FormOne setFormOneOpen={setFormOneOpen} />}
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkBlue,
    flex: 1
  },
  layout: {
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%"
  },
  text: {
    color: Colors.lightBlue,
    marginHorizontal: 15
  }
});
