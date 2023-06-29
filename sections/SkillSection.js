import { Text, StyleSheet, SectionList } from "react-native";
import React from "react";

import { skills } from "../contents/skillContents";
import useDarkMode from "../hooks/useDarkMode";

export default function Skill() {
  const { invertColor, betweenColor } = useDarkMode();

  return (
    <SectionList
      sections={skills}
      keyExtractor={(item, index) => item + index}
      renderSectionHeader={({ section: { title } }) => (
        <Text
          style={[styles.categoryText, { color: betweenColor, paddingTop: 10 }]}
        >
          {title}
        </Text>
      )}
      renderItem={({ item }) => (
        <Text style={[styles.contentText, { color: invertColor }]}>{item}</Text>
      )}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-end",
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  categoryText: {
    fontFamily: "HelveticaNeue",
    fontSize: 20,
    textAlign: "right",
    textTransform: "lowercase",
  },
  contentText: {
    fontFamily: "HelveticaNeue",
    textAlign: "right",
    fontSize: 30,
  },
});
