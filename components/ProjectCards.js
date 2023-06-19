import { View, Text } from "react-native";
import React from "react";
import { projects } from "../projectContents";

export default function ProjectCards({ windowSize, ID }) {
  if (ID >= projects.length) return <></>;

  return (
    <View
      key={ID}
      style={{
        width: windowSize.width * 0.8,
        height: windowSize.height * 0.8,
        borderColor: "grey",
        borderWidth: 1,
        padding: 15,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 50 }}>
        {projects[ID].name}
      </Text>
      <Text style={{ fontStyle: "italic", fontSize: 25 }}>
        {projects[ID].description}
      </Text>
    </View>
  );
}
