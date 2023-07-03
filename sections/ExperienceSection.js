import {
  View,
  Text,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  Linking,
} from "react-native";
import React from "react";

import { experiences } from "../contents/experienceContents";
import useDarkMode from "../hooks/useDarkMode";

export default function Experience() {
  const { width, height } = useWindowDimensions();
  const { invertColor, betweenColor } = useDarkMode();

  function RenderExperience(item) {
    return (
      <View>
        <Text
          style={{
            fontFamily: "HelveticaNeue",
            textAlign: "right",
            color: betweenColor,
            fontSize: 20,
            textTransform: "lowercase",
            paddingRight: 5,
          }}
        >
          {item.role}
        </Text>
        <Text
          style={{
            fontFamily: "HelveticaNeue",
            textAlign: "right",
            color: invertColor,
            fontSize: 35,
            textTransform: "uppercase",
            textDecorationLine: "underline",
            marginBottom: 15,
          }}
          onPress={() => Linking.openURL(item.website)}
        >
          {item.company}
        </Text>

        {item.tasks.map((task, i) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Text
              style={[
                styles.taskText,
                { color: i % 2 === 1 ? invertColor : betweenColor },
              ]}
            >
              {task} {/* //! Change to useMemo of components to reduce lag */}
            </Text>
          </View>
        ))}
      </View>
    );
  }

  return (
    <FlatList
      data={experiences}
      inverted
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => RenderExperience(item)}
      style={{
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
      }}
      ItemSeparatorComponent={() => <View style={{ height: 50 }} />}
      showsVerticalScrollIndicator={false}
      removeClippedSubviews={true}
    />
  );
}

const styles = StyleSheet.create({
  taskText: {
    fontFamily: "HelveticaNeue",
    textAlign: "right",
    fontSize: 25,
  },
});
