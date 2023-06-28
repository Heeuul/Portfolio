import { View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

import { sections } from "../contents/sectionContents";
import SectionButton from "./SectionButton";
import useDarkMode from "../hooks/useDarkMode";

export default function BaseFooter() {
  const { isDarkMode, invertColor, ToggleDarkMode } = useDarkMode();

  return (
    <View style={{ flexDirection: "row" }}>
      <FlatList
        data={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SectionButton sectionID={item.id} />}
        scrollEnabled={false}
      />
      <TouchableOpacity
        onPress={() => ToggleDarkMode()}
        style={{ alignSelf: "flex-end" }}
      >
        <MaterialCommunityIcons
          name={isDarkMode ? "weather-night" : "weather-sunny"}
          size={isDarkMode ? 30 : 32}
          color={invertColor}
          style={styles.modeIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  modeIcon: {
    padding: 5,
  },
});
