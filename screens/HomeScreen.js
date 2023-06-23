import { View, useWindowDimensions, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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
    <SafeAreaView style={[styles.container, { backgroundColor: "#121212" }]}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: "95%",
    height: "95%",
    justifyContent: "space-between",
    padding: 25,
    borderRadius: 25,
    overflow: "hidden",
  },
  baseContainer: {
    justifyContent: "space-between",
  },
});
