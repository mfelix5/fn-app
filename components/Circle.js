import React from 'react';
import { View } from 'react-native';

export function Circle({ size, white }) {
  return (
    <View
      style={{
        width: 12,
        height: 12,
        borderRadius: 12/2,
        marginLeft: 10,
        backgroundColor: white ? "white" : "gray"
      }}
    ></View>
  );
}
