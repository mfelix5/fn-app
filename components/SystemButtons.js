import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import PromptText from "../components/PromptText";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

export default function SystemButtons(props) {
  return (
    <View>
      {systems.map(system => {
        return (
        <TouchableOpacity
          disabled={!system.active}
          style={styles.button}
          key={system.name}
          onPress={() => props.onSelect(system.name)}
        >
          <View style={styles.hr}/>
          <View style={styles.buttonTextContainer}>
          <PromptText style={styles.buttonText}>{system.name}</PromptText>
          </View>

        </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: "100%",
  },
  buttonTextContainer: {
    marginTop: 11,
    paddingLeft: Layout.margin,
  },
  buttonText: {
    color: Colors.lightBlue
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