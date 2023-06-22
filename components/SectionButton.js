import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function SectionButton({ sectionName, OnButtonPress }) {
  return (
    <TouchableOpacity style={styles.sectionButton} onPress={OnButtonPress}>
      <Text style={styles.sectionButtonText}>{sectionName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  sectionButton: {
    alignSelf: "flex-start",
    borderLeftWidth: 2,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  sectionButtonText: {
    fontFamily: "HelveticaNeue",
    fontSize: 20,
  },
});
