import { View, useWindowDimensions, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";

import { sections } from "./contents/sectionContents";
import BaseHeader from "./components/BaseHeader";
import BaseFooter from "./components/BaseFooter";
import { colors } from "./styles";

export default function App() {
  const { width, height } = useWindowDimensions();
  const [section, SetSection] = useState(0);

  const [darkMode, SetDarkMode] = useState(false);
  const [fontsLoaded] = useFonts({
    HelveticaNeue: require("./fonts/HelveticaNeue-Light.otf"),
  });

  return fontsLoaded ? (
    <View style={styles.container}>
      <View
        style={[
          styles.innerContainer,
          { flexDirection: width > height ? "row" : "column" },
        ]}
      >
        <View style={styles.baseContainer}>
          <BaseHeader />
          <BaseFooter UpdateSection={SetSection} />
        </View>
        {sections[section].component}
      </View>
    </View>
  ) : (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  innerContainer: {
    width: "90%",
    height: "90%",
    justifyContent: "space-between",
  },
  baseContainer: {
    justifyContent: "space-between",
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
