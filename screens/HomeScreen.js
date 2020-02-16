import React, { useState, useEffect } from "react";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { SystemButtons } from "../components/SystemButtons";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>FareWise NY</Text>
        </View>

        <View style={styles.centeredContainer}>
          <Text style={styles.getStartedText}>Choose a transit system and find your least expensive ticket options.</Text>
        </View>

        <View style={styles.centeredContainer}>
          <SystemButtons />
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
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30
  },
  centeredContainer: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  getStartedText: {
    fontSize: 25,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  title: {
    fontSize: 50
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 200,
    marginBottom: 20
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
});
