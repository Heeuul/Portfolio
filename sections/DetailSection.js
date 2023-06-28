import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  Linking,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";

import { details } from "../contents/detailsContents";
import useDarkMode from "../hooks/useDarkMode";

export default function Detail() {
  const { width, height } = useWindowDimensions();
  const { isDarkMode, invertColor, modeColorElevated } = useDarkMode();

  const [personal, SetPersonal] = useState(true);

  function PersonalRender() {
    return (
      <View style={{ flex: 1 }}>
        <Text
          style={[
            styles.text,
            {
              textAlign: width > height ? "right" : "left",
              color: invertColor,
            },
          ]}
        >
          {details.personal.name}
        </Text>
        <Text
          style={[
            styles.text,
            {
              textAlign: width > height ? "right" : "left",
              color: invertColor,
            },
          ]}
        >
          {details.personal.nickname}
        </Text>
        <Text
          style={[
            styles.text,
            {
              textAlign: width > height ? "right" : "left",
              color: invertColor,
            },
          ]}
        >
          {details.personal.email}
        </Text>
        <Text
          style={[
            styles.text,
            {
              textAlign: width > height ? "right" : "left",
              color: invertColor,
            },
          ]}
        >
          {details.personal.phone}
        </Text>
        <Text
          style={[
            styles.text,
            {
              textAlign: width > height ? "right" : "left",
              color: invertColor,
            },
          ]}
        >
          {details.personal.location}
        </Text>
        <Text
          style={[
            styles.text,
            {
              textAlign: width > height ? "right" : "left",
              color: invertColor,
            },
          ]}
        >
          {details.personal.interests.join(", ")}
        </Text>
      </View>
    );
  }
  function PageRender() {
    return (
      <View style={{ flex: 1 }}>
        <Text
          style={[
            styles.text,
            {
              color: invertColor,
              textAlign: width > height ? "right" : "left",
            },
          ]}
        >
          <Text>
            {"This page's design is inspired by " +
              details.page.inspiration +
              "'s portfolio: "}
          </Text>
          <Text
            style={{
              color: isDarkMode ? "lightblue" : "blue",
              textDecorationLine: "underline",
            }}
            onPress={() => Linking.openURL("https://p5aholic.me/projects/")}
          >
            {details.page.inspirationSite}
          </Text>
        </Text>
        <Text
          style={[
            styles.text,
            {
              textAlign: width > height ? "right" : "left",
              color: invertColor,
            },
          ]}
        >
          {"This page is made using " + details.page.framework}
        </Text>
        <Text
          style={[
            styles.text,
            {
              textAlign: width > height ? "right" : "left",
              color: invertColor,
            },
          ]}
        >
          {"This page is hosted on " + details.page.host}
        </Text>
      </View>
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
        <TouchableOpacity
          onPress={() => SetPersonal(true)}
          style={{
            padding: 1,
            margin: 5,
            backgroundColor: personal ? modeColorElevated : "transparent",
            borderColor: personal ? invertColor : "transparent",
            borderRightWidth: 1,
            borderBottomWidth: 1,
            borderRadius: 5,
          }}
        >
          <MaterialIcons name="contact-page" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => SetPersonal(false)}
          style={{
            padding: 1,
            margin: 5,
            backgroundColor: personal ? "transparent" : modeColorElevated,
            borderColor: personal ? "transparent" : invertColor,
            borderRightWidth: 1,
            borderBottomWidth: 1,
            borderRadius: 5,
          }}
        >
          <MaterialIcons name="find-in-page" size={25} color="white" />
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
    paddingBottom: 25,
  },
});
