import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

import { experiences } from "../contents/experienceContents";
import useDarkMode from "../hooks/useDarkMode";

export default function Experience() {
  const { invertColor, modeColorElevated } = useDarkMode();

  return (
    <FlatList
      data={experiences}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <Text style={[styles.companyText, { color: invertColor }]}>
            {item.company}
          </Text>
          <Text style={[styles.roleText, { color: invertColor }]}>
            {item.role}
          </Text>
          {item.tasks.map((task) => (
            <View style={{ flexDirection: "row" }}>
              <Text
                style={[
                  styles.taskText,
                  { paddingRight: 15, color: invertColor },
                ]}
              >
                {"\u2022"}
              </Text>
              <Text style={[styles.taskText, { color: invertColor }]}>
                {task}
              </Text>
            </View>
          ))}
        </View>
      )}
      style={{
        backgroundColor: modeColorElevated,
        width: "90%",
        height: "90%",
        alignSelf: "flex-end",
        padding: 10,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
      }}
      showsVerticalScrollIndicator={false}
      inverted
    />
  );
}

const styles = StyleSheet.create({
  companyText: {
    fontFamily: "HelveticaNeue",
    fontSize: 35,
    textAlign: "right",
    textTransform: "uppercase",
  },
  roleText: {
    fontFamily: "HelveticaNeue",
    fontSize: 25,
    textAlign: "right",
    textDecorationLine: "underline",
  },
  taskText: {
    fontFamily: "HelveticaNeue",
    fontSize: 25,
  },
});
