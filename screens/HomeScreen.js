import { View, useWindowDimensions, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";

import BaseHeader from "../components/BaseHeader";
import BaseFooter from "../components/BaseFooter";
import Content from "../components/Content";
import useDarkMode from "../hooks/useDarkMode";

export default function HomeScreen() {
  const { width, height } = useWindowDimensions();
  const { modeColor } = useDarkMode();

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
        <Content />
        <View style={styles.baseContainer}>
          <BaseHeader />
          <BaseFooter />
        </View>
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
  baseContainer: {
    justifyContent: "space-between",
  },
});
