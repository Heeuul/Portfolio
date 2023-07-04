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
        <Text style={styles.detailText}>
          <Text style={[styles.titleText, { color: betweenColor }]}>
            {"email" + "\n"}
          </Text>
          <Text
            style={{ fontSize: 30, color: invertColor }}
            pointerEvents="none"
          >
            {details.personal.email}
          </Text>
        </Text>

        <Text style={styles.detailText}>
          <Text style={[styles.titleText, { color: betweenColor }]}>
            {"phone" + "\n"}
          </Text>
          <Text style={{ fontSize: 30, color: invertColor }}>
            {details.personal.phone}
          </Text>
        </Text>

        <Text style={styles.detailText}>
          <Text style={[styles.titleText, { color: betweenColor }]}>
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
        <Text style={styles.detailText}>
          <Text style={[styles.titleText, { color: betweenColor }]}>
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

        <Text style={styles.detailText}>
          <Text style={[styles.titleText, { color: betweenColor }]}>
            {"made using" + "\n"}
          </Text>
          <Text style={{ fontSize: 30, color: invertColor }}>
            {details.page.framework}
          </Text>
        </Text>

        <Text style={styles.detailText}>
          <Text style={[styles.titleText, { color: betweenColor }]}>
            {"hosted on" + "\n"}
          </Text>
          <Text style={[styles.contentText, { color: invertColor }]}>
            {details.page.host}
          </Text>
        </Text>
      </View>
    );
  }

  return (
    <View
      style={[
        styles.container,
        { alignItems: width > height ? "flex-end" : "flex-start" },
      ]}
    >
      <View>
        <Text
          style={[
            styles.buttonText,
            {
              color: betweenColor,
              textDecorationLine: personalSection ? "underline" : "none",
            },
          ]}
          onPress={() => SetPersonalSection(true)}
        >
          Personal Detail
        </Text>
        <Text
          style={[
            styles.buttonText,
            {
              color: betweenColor,
              textDecorationLine: personalSection ? "none" : "underline",
            },
          ]}
          onPress={() => SetPersonalSection(false)}
        >
          Page Detail
        </Text>
      </View>
      <ScrollView
        scrollEnabled={true}
        style={{ height: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        {personalSection ? PersonalRender() : PageRender()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  detailText: {
    fontFamily: "HelveticaNeue",
    textAlign: "right",
    paddingBottom: 10,
  },
  titleText: { fontSize: 20 },
  contentText: { fontSize: 30 },
  buttonText: {
    fontFamily: "HelveticaNeue",
    fontSize: 15,
    textTransform: "uppercase",
  },
});
