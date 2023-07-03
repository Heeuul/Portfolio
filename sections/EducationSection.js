import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

import { educations } from "../contents/educationContents";
import useDarkMode from "../hooks/useDarkMode";

export default function Education() {
  const { invertColor, betweenColor } = useDarkMode();

  function RenderEdu(item) {
    return (
      <View>
        <Text style={[styles.text, { color: betweenColor }]}>{item.name}</Text>
        <Text style={[styles.courseText, { color: invertColor }]}>
          {item.course}
        </Text>
        <Text style={[styles.text, { color: betweenColor }]}>
          {item.startDate + "~" + item.endDate}
        </Text>
        <Text style={[styles.text, { color: betweenColor }]}>
          {item.location}
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
        inverted
        ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "HelveticaNeue",
    fontSize: 20,
    textAlign: "right",
  },
  courseText: {
    fontFamily: "HelveticaNeue",
    fontSize: 30,
    textAlign: "right",
  },
});
