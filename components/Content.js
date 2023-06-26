import { View, Text, StyleSheet } from "react-native";
import React from "react";
import useSection from "../hooks/useSection";
import useDarkMode from "../hooks/useDarkMode";

export default function Content() {
  const { invertColor } = useDarkMode();
  const { currentSectionData } = useSection();

  return (
    <View style={styles.contentContainer}>
      <Text style={[styles.contentHeaderText, { color: invertColor }]}>
        {currentSectionData.title}
      </Text>
      {currentSectionData.component}
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
  contentHeaderText: {
    fontFamily: "HelveticaNeue",
    fontSize: 50,
    alignSelf: "flex-end",
    textAlign: "right",
    textDecorationLine: "underline",
    paddingVertical: 5,
  },
});
