import { View, useWindowDimensions, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";

import BaseHeader from "../components/BaseHeader";
import BaseFooter from "../components/BaseFooter";
import useDarkMode from "../hooks/useDarkMode";
import useSection from "../hooks/useSection";
import Background from "../components/Background";

export default function HomeScreen() {
  const { width, height } = useWindowDimensions();

  const { currentSectionData } = useSection();
  const { modeColor, betweenColor } = useDarkMode();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View
        style={[
          styles.innerContainer,
          {
            flexDirection: width > height ? "row-reverse" : "column-reverse",
            backgroundColor: modeColor,
          },
        ]}
      >
        <View
          style={[
            styles.contentContainer,
            width < height && {
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: betweenColor,
            },
          ]}
        >
          {currentSectionData.component}
        </View>
        <View style={styles.baseContainer}>
          <BaseHeader />
          <BaseFooter />
        </View>
      </View>
      <Background />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  innerContainer: {
    width: "90%",
    height: "90%",
    justifyContent: "space-between",
    padding: 25,
    borderRadius: 25,
    overflow: "hidden",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
  },
  baseContainer: {
    justifyContent: "space-between",
  },
});
