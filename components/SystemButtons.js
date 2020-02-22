import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function SystemButtons(props) {

  const handlePress = (system) => {
    props.setSystem(system);
    props.setModalOpen(true);
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
          <Text>{system.name}</Text>
        </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#fff"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    margin: 7,
    width: 60,
    height: 60,
    backgroundColor: "gray",
    borderRadius: 10
  }
});

const systems = [
  {
    name: "NJT",
    icon: "",
    active: true
  },
  {
    name: "LIRR",
    icon: "",
    active: true
  },
  {
    name: "MN",
    icon: "",
    active: false
  },
  {
    name: "Subway",
    icon: "",
    active: false
  },
  {
    name: "PATH",
    icon: "",
    active: false
  }
];