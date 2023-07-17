import {
  View,
  Text,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  Linking,
  Platform,
} from "react-native";
import React, { useEffect, useRef } from "react";

import { experiences } from "../contents/experienceContents";
import useDarkMode from "../hooks/useDarkMode";

export default function Experience() {
  const { width, height } = useWindowDimensions();
  const { invertColor, betweenColor } = useDarkMode();

  function RenderExperience(item) {
    return (
      <View>
        <Text
          style={[styles.companyText, { color: invertColor }]}
          onPress={() => Linking.openURL(item.website)}
        >
          {item.company}
        </Text>
        <Text style={[styles.roleText, { color: betweenColor }]}>
          {item.role}
        </Text>
        <Text style={[styles.timeText, { color: invertColor }]}>
          {item.startDate + "~" + item.endDate}
        </Text>

        <FlatList
          data={item.tasks}
          renderItem={({ item, index }) => RenderTask(item, index)}
          style={{ width: "95%", alignSelf: "center" }}
        />
      </View>
    );
  }
  function RenderTask(item, index) {
    return (
      <View style={{ flexDirection: "row" }}>
        <Text
          style={[
            styles.taskText,
            {
              color: index % 2 === 0 ? invertColor : betweenColor,
              marginRight: Platform.OS === "web" ? 10 : 0,
            },
          ]}
        >
          {"\u2022" + (Platform.OS === "web" ? "" : " ")}
        </Text>
        <Text
          style={[
            styles.taskText,
            { color: index % 2 === 0 ? invertColor : betweenColor },
          ]}
        >
          {item}
        </Text>
      </View>
    );
  }

  const listRef = useRef(null);
  useEffect(() => {
    listRef.current.scrollToOffset({ offset: 9999, animated: true });
  }, []);

  return (
    <FlatList
      ref={listRef}
      data={experiences}
      inverted
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => RenderExperience(item)}
      ItemSeparatorComponent={() => <View style={{ height: 50 }} />}
      removeClippedSubviews={true}
      style={{
        maxHeight: height * (width > height ? 0.9 : 0.45),
        paddingRight: 10,
      }}
    />
  );
}

const styles = StyleSheet.create({
  companyText: {
    fontFamily: "HelveticaNeue",
    fontSize: 40,
    includeFontPadding: false,
    textTransform: "uppercase",
    textAlign: "right",
    alignSelf: "flex-end",
  },
  roleText: {
    fontFamily: "HelveticaNeue",
    fontSize: 20,
    includeFontPadding: false,
    textTransform: "lowercase",
    textAlign: "right",
  },
  timeText: {
    fontFamily: "HelveticaNeue",
    fontSize: 20,
    includeFontPadding: false,
    textAlign: "right",
    marginBottom: 25,
  },
  taskText: {
    fontFamily: "HelveticaNeue",
    fontSize: 25,
    textAlign: "left",
  },
});
