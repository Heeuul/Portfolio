import { View, Text, Image } from "react-native";
import React from "react";

export default function BaseHeader() {
  return (
    <View>
      <Text
        style={{
          fontFamily: "HelveticaNeue",
          fontSize: 65,
          borderBottomWidth: 2,
          lineHeight: 75,
        }}
      >
        Aiman Hans
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
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
        <View style={{}}>
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
