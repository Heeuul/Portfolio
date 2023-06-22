import { View, Text, StyleSheet, SectionList, Platform } from "react-native";
import React from "react";

import { skills } from "../contents/skillContents";
import Swiper from "react-native-web-swiper";

export default function Skill() {
  return (
    <View style={{ width: "100%", height: "100%", alignItems: "flex-end" }}>
      <Text style={styles.headerText}>Skills</Text>
      <SectionList
        sections={skills}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.categoryText}>{title}</Text>
        )}
        renderItem={({ item }) => (
          <Text style={styles.contentText}>{item}</Text>
        )}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        style={{ borderTopWidth: 1, borderBottomWidth: 1 }}
      />
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
