import { View, Text } from "react-native";
import React from "react";

export default function SectionButton() {
  return (
    <TouchableOpacity style={styles.sectionButton} onPress={() => SetSection("Projects")}>
      <Text style={styles.sectionButtonText}>Projects</Text>
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
