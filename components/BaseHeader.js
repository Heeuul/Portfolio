import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

import useDarkMode from "../hooks/useDarkMode";

export default function BaseHeader() {
  const { invertColor, betweenColor } = useDarkMode();

  return (
    <View>
      <Text style={[styles.nameText, { color: invertColor }]}>Aiman Hans</Text>
      <View style={styles.titleButton}>
        <Image
          source={{
            uri: "https://static.thenounproject.com/png/390336-200.png",
          }}
          style={[styles.icon, { backgroundColor: betweenColor }]}
        />
        <View>
          <Text style={[styles.techText, { color: invertColor }]}>
            Full Stack
          </Text>
          <Text style={[styles.roleText, { color: invertColor }]}>
            Developer/Programmer
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nameText: {
    fontFamily: "HelveticaNeue",
    fontSize: 55,
    lineHeight: 75,
    textDecorationLine: "underline",
  },
  titleButton: {
    flexDirection: "row",
  },
  icon: {
    resizeMode: "contain",
    width: 55,
    height: 55,
    borderRadius: 55,
    marginHorizontal: 5,
  },
  techText: {
    fontFamily: "HelveticaNeue",
    fontSize: 30,
  },
  roleText: {
    fontFamily: "HelveticaNeue",
    fontSize: 15,
    padding: 1,
    includeFontPadding: false,
  },
});
