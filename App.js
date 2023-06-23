import {
  View,
  useWindowDimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import * as Font from "expo-font";

import { sections } from "./contents/sectionContents";
import BaseHeader from "./components/BaseHeader";
import BaseFooter from "./components/BaseFooter";
import { colors } from "./styles";
import { StatusBar } from "expo-status-bar";
import useDarkMode from "./hooks/useDarkMode";
import useCustomFont from "./hooks/useCustomFont";

export default function App() {
  const { width, height } = useWindowDimensions();

  const { isDarkMode, ToggleDarkMode } = useDarkMode();
  const fontsLoaded = useCustomFont();

  return fontsLoaded ? (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar style={isDarkMode ? "dark" : "light"} />
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: isDarkMode ? colors.light : colors.dark },
        ]}
      >
        <View
          style={[
            styles.innerContainer,
            {
              flexDirection: width > height ? "row-reverse" : "column-reverse",
              backgroundColor: isDarkMode ? colors.dark : colors.light,
            },
          ]}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.contentHeaderText}>
              {sections[section].title}
            </Text>
            {sections[section].component}
          </View>
          <View style={styles.baseContainer}>
            <TouchableOpacity onPress={() => ToggleDarkMode()}>
              <BaseHeader />
            </TouchableOpacity>
            <BaseFooter UpdateSection={SetSection} />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  ) : (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
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
  contentContainer: {
    flex: 1,
  },
  contentHeaderText: {
    fontFamily: "HelveticaNeue",
    fontSize: 50,
    alignSelf: "flex-end",
    textAlign: "right",
    textDecorationLine: "underline",
    paddingVertical: 5,
  },
  loadingContainer: {
    width: "100%",
    height: "100%",
  },
  loadingText: {
    fontFamily: "HelveticaNeue",
    fontWeight: "bold",
    fontSize: 50,
  },
});
