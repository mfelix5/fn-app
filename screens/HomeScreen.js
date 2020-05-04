import React from "react";
import { Image, StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import Colors from "../constants/Colors";
import AppButton from "../components/AppButton";
import PromptText from "../components/PromptText";
import Layout from "../constants/Layout";

export default HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.container}>
        <Image source={require("../assets/images/fw.png")} style={styles.image} />
        <View style={styles.textContainer}>
          <PromptText style={styles.text}>
            Farewise helps you save on your monthly commuting expenses in
            three easy steps.
          </PromptText>
        </View>
        <AppButton
          style={styles.button}
          handlePress={() => {
            navigation.navigate({ routeName: "FormOne" });
          }}
          buttonText="Get Going!"
        />
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
    flex: 1
  },
  text: {
    color: Colors.lightBlue,
    marginBottom: 100
  },
  image: {
    marginTop: 125,
    marginBottom: 80,
    width: 200,
    height: 150,
    resizeMode: "cover"
  },
});
