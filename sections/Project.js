import { View, Text, FlatList, useWindowDimensions } from "react-native";
import React from "react";

import { projects } from "../projectContents";

export default function Project() {
  const { width, height } = useWindowDimensions();

  function RenderProjectCard(item) {
    return (
      <View
        style={{
          width: width * 0.8,
          height: height * 0.8,
          borderColor: "grey",
          borderWidth: 1,
          padding: 15,
          marginRight: 25,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 50 }}>
          {item.item.name}
        </Text>
        <Text style={{ fontStyle: "italic", fontSize: 25 }}>
          {item.item.description}
        </Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#C9E4DE",
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
        <FlatList
          data={projects}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={(item) => RenderProjectCard(item)}
        />
      </View>
    </View>
  );
}
