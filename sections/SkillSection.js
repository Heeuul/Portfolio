import { View, Text, StyleSheet, SectionList } from "react-native";
import React from "react";

import { skills } from "../contents/skillContents";
import { colors } from "../styles";

export default function Skill() {
  return (
    <View
      style={{
        width: "90%",
        height: "90%",
        alignSelf: "flex-end",
      }}
    >
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
          style={{
            backgroundColor: colors.lightElevated,
            borderTopLeftRadius: 25,
            borderBottomLeftRadius: 25,
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
