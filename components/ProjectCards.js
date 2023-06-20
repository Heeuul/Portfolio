import { View, Text } from "react-native";
import React from "react";

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
          borderColor: "grey",
          borderWidth: 1,
          padding: 15,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 35 }}>
          {projectData.name}
        </Text>
        <Text style={{ fontStyle: "italic", fontSize: 20 }}>
          {projectData.description}
        </Text>
      </View>
    </View>
  );
}
