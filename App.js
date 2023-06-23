import {
  View,
  useWindowDimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import * as Font from "expo-font";
import {
  SafeAreaProvider,
  SafeAreaView,
  initialWindowMetrics,
} from "react-native-safe-area-context";

import { sections } from "./contents/sectionContents";
import BaseHeader from "./components/BaseHeader";
import BaseFooter from "./components/BaseFooter";
import { colors } from "./styles";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const { width, height } = useWindowDimensions();
  const [section, SetSection] = useState(0);

  const [darkMode, SetDarkMode] = useState(false);
  const [fontsLoaded, SetFontLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      HelveticaNeue: require("./fonts/HelveticaNeue-Light.otf"),
    }).then(() => SetFontLoaded(true));
  }, []);

  return fontsLoaded ? (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar style={darkMode ? "dark" : "light"} />
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: darkMode ? colors.light : colors.dark },
        ]}
      >
        <View
          style={[
            styles.innerContainer,
            {
              flexDirection: width > height ? "row-reverse" : "column-reverse",
              backgroundColor: darkMode ? colors.dark : colors.light,
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
            <TouchableOpacity onPress={() => SetDarkMode(!darkMode)}>
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
