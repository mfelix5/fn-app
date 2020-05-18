import React from "react";
import { Image, StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import Colors from "../constants/Colors";
import AppButton from "../components/AppButton";
import PromptText from "../components/PromptText";
import Layout from "../constants/Layout";

export default HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require("../assets/images/fw.png")} style={styles.image} />
        <View style={styles.textContainer}>
          <PromptText style={styles.text}>
            Farewise helps you save on your monthly commuting expenses in
            three easy steps.
          </PromptText>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            handlePress={() => {
              navigation.navigate({ routeName: "FormOne" });
            }}
            buttonText="Get Going!"
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.darkBlue,
  },
  container: {
    backgroundColor: Colors.darkBlue,
    paddingHorizontal: Layout.margin,
    justifyContent: "space-between",
    flex: 1
  },
  text: {
    color: Colors.lightBlue,
  },
  image: {
    marginTop: Layout.window.height * .1,
    width: 200,
    height: 125,
    resizeMode: "cover"
  },
  buttonContainer: {
    marginBottom: Layout.window.height * .15
  }
});
