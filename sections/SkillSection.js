import { View, Text, StyleSheet, SectionList } from "react-native";
import React from "react";

import { skills } from "../contents/skillContents";

export default function Skill() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.headerText}>Skills</Text>
      <View style={{ flexShrink: 1 }}>
        <SectionList
          sections={skills}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.categoryText}>{title}</Text>
          )}
          renderItem={({ item }) => (
            <Text style={styles.contentText}>{item}</Text>
          )}
          style={{ borderTopWidth: 1, borderBottomWidth: 1 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "HelveticaNeue",
    fontSize: 50,
    textAlign: "right",
    fontWeight: "bold",
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
