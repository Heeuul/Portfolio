import { View, Text, StyleSheet } from "react-native";
import React from "react";

import useDarkMode from "../hooks/useDarkMode";

export default function ProjectCards({ projectData }) {
  const { invertColor, betweenColor } = useDarkMode();

  return (
    <View key={projectData.id} style={styles.container}>
      <View style={[styles.contentContainer, { borderColor: betweenColor }]}>
        <Text style={[styles.titleText, { color: invertColor }]}>
          {projectData.name}
        </Text>
        <Text style={[styles.descriptionText, { color: invertColor }]}>
          {projectData.description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    width: "95%",
    height: "95%",
    borderRightWidth: 2,
    borderRadius: 10,
    padding: 15,
  },
  titleText: {
    fontFamily: "HelveticaNeue",
    fontWeight: "bold",
    fontSize: 35,
  },
  descriptionText: {
    fontFamily: "HelveticaNeue",
    fontStyle: "italic",
    fontSize: 20,
  },
});
