import { View, Text } from "react-native";
import React from "react";

export default function Introduction() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "80%",
          height: "80%",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 25 }}>I am Aiman Hans,</Text>
        <Text style={{ fontSize: 25 }}>
          currently looking for a React-Native position
        </Text>
        <Text style={{ fontSize: 50 }}>Welcome to my portfolio!</Text>
      </View>
    </View>
  );
}
