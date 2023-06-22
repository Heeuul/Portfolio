import { View, useWindowDimensions, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";

import { colors } from "./styles";
import { sections } from "./contents/sectionContents";
import BaseHeader from "./components/BaseHeader";
import BaseFooter from "./components/BaseFooter";

export default function App() {
  const { width, height } = useWindowDimensions();

  const [section, SetSection] = useState(0);
  const [darkMode, SetDarkMode] = useState(false);
  const [fontsLoaded] = useFonts({
    HelveticaNeue: require("./fonts/HelveticaNeue-Light.otf"),
  });

  return fontsLoaded ? (
    <View style={[styles.container, { width: width, height: height }]}>
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
        <View style={styles.contentContainer}>
          {sections[section].component}
        </View>
      </View>
    </View>
  ) : (
    <></>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: "90%",
    height: "90%",
    justifyContent: "space-between",
  },
  baseContainer: { justifyContent: "space-between" },
  contentContainer: {
    width: "60%",
    height: "100%",
  },
});
