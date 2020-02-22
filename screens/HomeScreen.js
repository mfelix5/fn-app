import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Colors from '../constants/Colors';
import { FormOne } from "../components/FormOne";
import { HeadingText } from "../components/HeadingText";
import { AppButton } from "../components/AppButton";

export default function HomeScreen() {
  const [formOneOpen, setFormOneOpen] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.layout}>
          <View style={styles.textContainer}>
            <HeadingText>Farewise helps you save on your monthly commuting expenses in just three steps.</HeadingText>
          </View>
          <AppButton
            handlePress={() => setFormOneOpen(true)}
            buttonText="Get Going!"
          />
          {formOneOpen && <FormOne setFormOneOpen={setFormOneOpen} />}
          </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkBlue,
    flex: 1,
  },
  layout: {
    alignItems: "center",
    height: "100%",
  },
  textContainer: {
    textAlign: "left",
    marginTop: 250,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 200
  },
});
