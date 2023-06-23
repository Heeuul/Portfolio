import { View, Text, Platform } from "react-native";
import React from "react";
import { colors } from "../styles";

export default function ProjectCards({ projectData }) {
  return (
    <View
      key={projectData.id}
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "95%",
          height: "95%",
          borderRightWidth: 2,
          borderRadius: 10,
          padding: 15,
        }}
      >
        <Text
          style={{
            fontFamily: "HelveticaNeue",
            fontWeight: "bold",
            fontSize: 35,
          }}
        >
          {projectData.name}
        </Text>
        <Text
          style={{
            fontFamily: "HelveticaNeue",
            fontStyle: "italic",
            fontSize: 20,
          }}
        >
          {projectData.description}
        </Text>
      </View>
    </View>
  );
}
