import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Linking,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

import { details } from "../contents/detailsContents";
import useDarkMode from "../hooks/useDarkMode";

export default function Detail() {
  const { width, height } = useWindowDimensions();
  const { isDarkMode, invertColor, betweenColor } = useDarkMode();

  const [personalSection, SetPersonalSection] = useState(true);

  function PersonalRender() {
    return (
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontFamily: "HelveticaNeue",
            textAlign: "right",
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: betweenColor,
              paddingHorizontal: 5,
            }}
          >
            {"email" + "\n"}
          </Text>
          <Text
            style={{
              fontSize: 30,
              color: invertColor,
              textDecorationLine: "none",
            }}
            pointerEvents="none"
          >
            {details.personal.email}
          </Text>
        </Text>

        <Text
          style={{
            fontFamily: "HelveticaNeue",
            textAlign: "right",
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: betweenColor,
              paddingHorizontal: 5,
            }}
          >
            {"phone" + "\n"}
          </Text>
          <Text style={{ fontSize: 30, color: invertColor }}>
            {details.personal.phone}
          </Text>
        </Text>

        <Text
          style={{
            fontFamily: "HelveticaNeue",
            textAlign: "right",
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: betweenColor,
              paddingHorizontal: 5,
            }}
          >
            {"interests" + "\n"}
          </Text>
          <Text style={{ fontSize: 30, color: invertColor }}>
            {details.personal.interests.join(", ")}
          </Text>
        </Text>
      </View>
    );
  }
  function PageRender() {
    return (
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontFamily: "HelveticaNeue",
            textAlign: "right",
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: betweenColor,
              paddingHorizontal: 5,
            }}
          >
            {"design inspired by" + "\n"}
          </Text>
          <Text style={{ fontSize: 30, color: invertColor }}>
            <Text>{details.page.inspiration + "'s "}</Text>
            <Text
              style={{
                color: isDarkMode ? "lightblue" : "blue",
                textDecorationLine: "underline",
              }}
              onPress={() => Linking.openURL("https://p5aholic.me/projects/")}
            >
              portfolio
            </Text>
          </Text>
        </Text>

        <Text
          style={{
            fontFamily: "HelveticaNeue",
            textAlign: "right",
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: betweenColor,
              paddingHorizontal: 5,
            }}
          >
            {"made using" + "\n"}
          </Text>
          <Text style={{ fontSize: 30, color: invertColor }}>
            {details.page.framework}
          </Text>
        </Text>

        <Text
          style={{
            fontFamily: "HelveticaNeue",
            textAlign: "right",
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: betweenColor,
              paddingHorizontal: 5,
            }}
          >
            {"hosted on" + "\n"}
          </Text>
          <Text style={{ fontSize: 30, color: invertColor }}>
            {details.page.host}
          </Text>
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
      <View>
        <Text
          style={{
            fontFamily: "HelveticaNeue",
            fontSize: 15,
            color: betweenColor,
            textTransform: "uppercase",
            textDecorationLine: personalSection ? "underline" : "none",
          }}
          onPress={() => SetPersonalSection(true)}
        >
          Personal Detail
        </Text>
        <Text
          style={{
            fontFamily: "HelveticaNeue",
            fontSize: 15,
            color: betweenColor,
            textTransform: "uppercase",
            textDecorationLine: personalSection ? "none" : "underline",
          }}
          onPress={() => SetPersonalSection(false)}
        >
          Page Detail
        </Text>
      </View>
      <ScrollView>
        {personalSection ? PersonalRender() : PageRender()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
