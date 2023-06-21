import { useWindowDimensions } from "react-native-web";
import { View, StyleSheet } from "react-native";
import Swiper from "react-native-web-swiper";
import React from "react";

import { sections } from "../contents/sectionContents";
import { colors, styles } from "../styles";

export default function WebBase() {
  const { width, height } = useWindowDimensions();

  const windowStyle = MakeStyle(width, height);
  function MakeStyle(width, height) {
    return StyleSheet.create({
      pageSection: {
        width: width,
        height: height,
      },
    });
  }

  return (
    <Swiper
      controlsEnabled={true}
      vertical={true}
      controlsProps={{
        dotsTouchable: true,
        dotsPos: "left",
        dotActiveStyle: { backgroundColor: colors.accentSharp },
        prevPos: "top-left",
        prevTitle: "Prev",
        prevTitleStyle: styles.swiperButton,
        nextPos: "bottom-left",
        nextTitle: "Next",
        nextTitleStyle: styles.swiperButton,
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <View style={windowStyle.pageSection}>{sections[0].component}</View>
      <View style={windowStyle.pageSection}>{sections[1].component}</View>
      <View style={windowStyle.pageSection}>{sections[2].component}</View>
      <View style={windowStyle.pageSection}>{sections[3].component}</View>
      <View style={windowStyle.pageSection}>{sections[4].component}</View>
    </Swiper>
  );
}
