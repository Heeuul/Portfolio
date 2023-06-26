import {
  View,
  Text,
  FlatList,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React from "react";

import { experiences } from "../contents/experienceContents";
import useDarkMode from "../hooks/useDarkMode";

export default function Experience() {
  const { width, height } = useWindowDimensions();
  const { invertColor } = useDarkMode();

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
            <Text style={[styles.taskText, { color: invertColor }]}>
              {task}
            </Text>
          ))}
        </View>
      )}
      inverted
      style={{
        flex: 1,
        height: "100%",
        // position: height < width ? "absolute" : undefined,
      }}
    />
  );
}

const styles = StyleSheet.create({
  companyText: {
    fontFamily: "HelveticaNeue",
    fontSize: 35,
    textAlign: "right",
  },
  roleText: {
    fontFamily: "HelveticaNeue",
    fontSize: 25,
    textAlign: "right",
  },
  taskText: {
    fontFamily: "HelveticaNeue",
    fontSize: 25,
    textAlign: "right",
  },
});
