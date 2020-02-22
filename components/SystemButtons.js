import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HeadingText } from "../components/HeadingText";
import Colors from "../constants/Colors";

export function SystemButtons(props) {
  const handlePress = (system) => {
    props.setSystem(system);
    props.setFormTwoOpen(true);
  };

  return (
    <View style={styles.container}>
      {systems.map(system => {
        return (
        <TouchableOpacity
          disabled={!system.active}
          style={styles.button}
          key={system.name}
          onPress={() => handlePress(system.name)}
        >
          <View style={styles.hr}/>
          <HeadingText style={styles.text}>{system.name}</HeadingText>
        </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-start"
  },
  button: {
    height: 80,
    width: "100%"
  },
  text: {
    paddingLeft: 15
  },
  hr: {
    borderBottomColor: Colors.lightBlue,
    borderBottomWidth: 2,
  }
});

const systems = [
  {
    name: "MTA Subway",
    icon: "",
    active: false
  },
  {
    name: "MTA Bus",
    icon: "",
    active: false
  },
  {
    name: "LIRR",
    icon: "",
    active: true
  },
  {
    name: "MetroNorth",
    icon: "",
    active: false
  },
  {
    name: "NJT",
    icon: "",
    active: true
  },
  {
    name: "PATH",
    icon: "",
    active: false
  }
];