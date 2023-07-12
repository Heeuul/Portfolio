import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

export default function PopupImage({ imageSource }) {
  const [show, SetShow] = useState(true);

  return (
    show && (
      <ImageBackground
        source={require("../assets/CRTScanLine.gif")}
        style={{
          color: "black",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          overflow: "visible",
        }}
      >
        <Image source={imageSource} style={{ width: "100%", height: "100%" }} />
        <TouchableOpacity
          onPress={() => SetShow(false)}
          style={{ width: "100%", height: "100%", position: "absolute" }}
        >
          <AntDesign name="close" size={50} color="black" />
        </TouchableOpacity>
      </ImageBackground>
    )
  );
}

const styles = StyleSheet.create({});
