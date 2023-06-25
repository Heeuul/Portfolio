import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

import useDarkMode from "../hooks/useDarkMode";

export default function BaseHeader() {
  const { invertColor } = useDarkMode();

  return (
    <View>
      <Text style={[styles.nameText, { color: invertColor }]}>Aiman Hans</Text>
      <View style={styles.titleButton}>
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
});
