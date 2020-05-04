import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import PromptText from "../components/PromptText";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

export default SystemButtons = ({ handlePress }) => {
  return (
    <View>
      {systems.map(system => {
        return (
        <TouchableOpacity
          disabled={!system.active}
          style={styles.button}
          key={system.value}
          onPress={() => handlePress(system.value)}
        >
          <View style={styles.hr}/>
          <View style={styles.buttonTextContainer}>
          <PromptText
            style={system.active ? styles.active : styles.disabled }>
              {system.name}
          </PromptText>
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
  active: {
    color: Colors.lightBlue
  },
  hr: {
    borderBottomColor: Colors.lightBlue,
    borderBottomWidth: 2,
  },
  disabled: {
    color: "gray"
  },
});

const systems = [
  {
    name: "LIRR",
    value: "LIRR",
    active: true
  },
  {
    name: "Metro North",
    value: "MN",
    active: false
  },
  {
    name: "NJ Transit",
    value: "NJT",
    active: true
  },
  {
    name: "PATH",
    value: "PATH",
    active: false
  }
];