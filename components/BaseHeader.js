import { View, Text, Image } from "react-native";
import React from "react";

import { colors } from "../styles";

export default function BaseHeader() {
  return (
    <View>
      <Text
        style={{
          fontFamily: "HelveticaNeue",
          fontSize: 55,
          lineHeight: 75,
        }}
      >
        Aiman Hans
      </Text>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: colors.lightElevated,
          borderRadius: 15,
        }}
      >
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/270px-React-icon.svg.png",
          }}
          style={{
            resizeMode: "contain",
            width: 55,
            height: 55,
            marginHorizontal: 5,
          }}
        />
        <View>
          <Text
            style={{ fontFamily: "HelveticaNeue", fontSize: 30, padding: 0 }}
          >
            React Native
          </Text>
          <Text
            style={{ fontFamily: "HelveticaNeue", fontSize: 15, padding: 1 }}
          >
            Developer/Programmer
          </Text>
        </View>
      </View>
    </View>
  );
}