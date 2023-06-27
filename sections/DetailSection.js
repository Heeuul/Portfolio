import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";

import { details } from "../contents/detailsContents";
import useDarkMode from "../hooks/useDarkMode";

export default function Detail() {
  const { width, height } = useWindowDimensions();
  const { invertColor } = useDarkMode();

  const [personal, SetPersonal] = useState(true);

  function PersonalRender() {
    return (
      <Text style={[styles.text, { color: invertColor }]}>
        {details.personal.nickname}
      </Text>
    );
  }
  function PageRender() {
    return (
      <Text style={[styles.text, { color: invertColor }]}>
        {details.page.inspiration}
      </Text>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: width > height ? "flex-end" : "flex-start",
      }}
    >
      <View style={{}}>
        <TouchableOpacity onPress={() => SetPersonal(true)}>
          <MaterialIcons name="contact-page" size={35} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => SetPersonal(false)}>
          <MaterialIcons name="find-in-page" size={35} color="white" />
        </TouchableOpacity>
      </View>
      {personal ? PersonalRender() : PageRender()}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "HelveticaNeue",
    fontSize: 25,
    textAlign: "right",
  },
});
