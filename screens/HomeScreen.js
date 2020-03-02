import React, { useState } from "react";
import { Image, StyleSheet, View, ScrollView } from "react-native";
import Colors from "../constants/Colors";
import AppButton from "../components/AppButton";
import PromptText from "../components/PromptText";
import Layout from "../constants/Layout";

export default function HomeScreen(props) {
  const [formOneOpen, setFormOneOpen] = useState(false);
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/fw.png")} style={styles.image} />
      <View style={styles.textContainer}>
        <PromptText style={styles.text}>
          Farewise helps you save on your monthly commuting expenses in just
          three steps.
        </PromptText>
      </View>
      <AppButton
        style={styles.button}
        handlePress={() => {
          props.navigation.navigate({ routeName: "FormOne" });
        }}
        buttonText="Get Going!"
      />
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkBlue,
    paddingHorizontal: Layout.margin,
    justifyContent: "center",
    flex: 1
  },
  text: {
    color: Colors.lightBlue,
    marginBottom: 100
  },
  image: {
    marginTop: 100,
    marginBottom: 100,
    width: 200,
    height: 150,
    resizeMode: "cover"
  },

});
