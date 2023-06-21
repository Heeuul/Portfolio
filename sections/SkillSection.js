import { View, Text } from "react-native";
import React from "react";

export default function Skill() {
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
        }}
      >
        <Text style={{ fontSize: 35 }}>Skills</Text>

        <View style={{ flex: 1, paddingHorizontal: 15 }}>
          <Text style={{ fontSize: 25, textDecorationLine: "underline" }}>
            Programming
          </Text>
          <Text style={{ fontSize: 25, textDecorationLine: "underline" }}>
            Framework
          </Text>
          <Text style={{ fontSize: 25, textDecorationLine: "underline" }}>
            Communication
          </Text>
        </View>
      </View>
    </View>
  );
}
