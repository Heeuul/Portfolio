import { View, Image } from "react-native";
import React from "react";

export default function Background() {
  return (
    <View
      style={{
        width: "90%",
        height: "90%",
        position: "absolute",
        borderRadius: 25,
      }}
      pointerEvents="none"
    >
      <Image
        source={require("../assets/CRTScanLine.gif")}
        style={{
          width: "100%",
          height: "100%",
          opacity: 0.15,
          borderRadius: 25,
        }}
      />
    </View>
  );
}
