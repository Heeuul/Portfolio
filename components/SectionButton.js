import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import useDarkMode from "../hooks/useDarkMode";
import useSection from "../hooks/useSection";

export default function SectionButton({ sectionID }) {
  const { modeColor, modeColorElevated, invertColor } = useDarkMode();
  const { currentSectionID, GetSectionData, SetSection } = useSection();

  return (
    <TouchableOpacity
      style={[
        styles.sectionButton,
        {
          borderColor: modeColorElevated,
          backgroundColor:
            sectionID === currentSectionID ? modeColorElevated : modeColor,
        },
      ]}
      onPress={() => SetSection(sectionID)}
    >
      <Text
        style={[
          styles.sectionButtonText,
          { color: sectionID === currentSectionID ? modeColor : invertColor },
        ]}
      >
        {GetSectionData(sectionID).title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  sectionButton: {
    alignSelf: "flex-start",
    borderLeftWidth: 3,
    borderRadius: 7,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  sectionButtonText: {
    fontFamily: "HelveticaNeue",
    fontSize: 20,
  },
});
