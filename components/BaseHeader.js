import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

import { colors } from "../styles";
import useDarkMode from "../hooks/useDarkMode";

export default function BaseHeader() {
  const { isDarkMode, ToggleDarkMode, modeColorElevated, invertColor } =
    useDarkMode();

  return (
    <View>
      <Text style={[styles.nameText, { color: invertColor }]}>Aiman Hans</Text>
      <TouchableOpacity
        style={[styles.titleButton, { backgroundColor: modeColorElevated }]}
        onPress={() => ToggleDarkMode()}
      >
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/270px-React-icon.svg.png",
          }}
          style={styles.reactLogo}
        />
        <View>
          <Text style={[styles.rnText, { color: invertColor }]}>
            React Native
          </Text>
          <Text style={[styles.roleText, { color: invertColor }]}>
            Developer/Programmer
          </Text>
        </View>
        <MaterialCommunityIcons
          name={isDarkMode ? "weather-night" : "weather-sunny"}
          size={isDarkMode ? 30 : 33}
          color={colors.light}
          style={styles.modeIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  nameText: {
    fontFamily: "HelveticaNeue",
    fontSize: 55,
    lineHeight: 75,
  },
  titleButton: {
    flexDirection: "row",
    borderRadius: 15,
  },
  reactLogo: {
    resizeMode: "contain",
    width: 55,
    height: 55,
    marginHorizontal: 5,
  },
  rnText: {
    fontFamily: "HelveticaNeue",
    fontSize: 30,
  },
  roleText: {
    fontFamily: "HelveticaNeue",
    fontSize: 15,
    padding: 1,
  },
  modeIcon: { position: "absolute", right: 0, bottom: 0, padding: 3 },
});
