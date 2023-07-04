import {
  Text,
  StyleSheet,
  SectionList,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";

import { skills } from "../contents/skillContents";
import useDarkMode from "../hooks/useDarkMode";

export default function Skill() {
  const { width, height } = useWindowDimensions();
  const { invertColor, betweenColor } = useDarkMode();

  return (
    <SectionList
      sections={skills}
      keyExtractor={(item, index) => item + index}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={[styles.categoryText, { color: betweenColor }]}>
          {title}
        </Text>
      )}
      renderItem={({ item }) => (
        <Text style={[styles.contentText, { color: invertColor }]}>{item}</Text>
      )}
      renderSectionFooter={() => <View style={{ height: 50 }} />}
      style={[
        styles.container,
        { maxHeight: height * (width > height ? 0.9 : 0.5) },
      ]}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "flex-end",
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
