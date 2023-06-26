import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

import { educations } from "../contents/educationContents";
import useDarkMode from "../hooks/useDarkMode";

export default function Education() {
  const { invertColor } = useDarkMode();

  function RenderEdu(item) {
    return (
      <View>
        <Text style={[styles.eduText, { color: invertColor }]}>
          {item.name}
        </Text>
        <Text style={[styles.text, { color: invertColor }]}>{item.course}</Text>
        <Text style={[styles.text, { color: invertColor }]}>
          {item.location}
        </Text>
        <Text style={[styles.text, { color: invertColor }]}>
          {item.startDate + "~" + item.endDate}
        </Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={educations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => RenderEdu(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  eduText: {
    fontFamily: "HelveticaNeue",
    fontSize: 35,
    textAlign: "right",
    textDecorationLine: "underline",
  },
  text: {
    fontFamily: "HelveticaNeue",
    fontSize: 25,
    textAlign: "right",
  },
});
