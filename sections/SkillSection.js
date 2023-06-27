import { Text, StyleSheet, SectionList } from "react-native";
import React from "react";

import { skills } from "../contents/skillContents";
import useDarkMode from "../hooks/useDarkMode";

export default function Skill() {
  const { invertColor, modeColorElevated } = useDarkMode();

  return (
    <SectionList
      sections={skills}
      keyExtractor={(item, index) => item + index}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={[styles.categoryText, { color: invertColor }]}>
          {title}
        </Text>
      )}
      renderItem={({ item }) => (
        <Text style={[styles.contentText, { color: invertColor }]}>{item}</Text>
      )}
      style={[styles.container, { backgroundColor: modeColorElevated }]}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "85%",
    padding: 10,
    alignSelf: "flex-end",
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  categoryText: {
    fontFamily: "HelveticaNeue",
    fontSize: 35,
    textAlign: "right",
    textDecorationLine: "underline",
  },
  contentText: {
    fontFamily: "HelveticaNeue",
    textAlign: "right",
    fontSize: 25,
  },
});
