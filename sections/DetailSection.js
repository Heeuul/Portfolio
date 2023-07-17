import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Linking,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";

import { details } from "../contents/detailsContents";
import useDarkMode from "../hooks/useDarkMode";
import { educations } from "../contents/educationContents";
import Swiper from "react-native-web-swiper";

export default function Detail() {
  const { width, height } = useWindowDimensions();
  const { isDarkMode, invertColor, betweenColor } = useDarkMode();

  function RenderEdu(item) {
    return (
      <View>
        <Text style={[styles.eduText, { color: betweenColor }]}>
          {item.name}
        </Text>
        <Text style={[styles.eduCourseText, { color: invertColor }]}>
          {item.course}
        </Text>
        <Text style={[styles.eduText, { color: betweenColor }]}>
          {item.startDate + "~" + item.endDate}
        </Text>
        <Text style={[styles.eduText, { color: betweenColor }]}>
          {item.location}
        </Text>
      </View>
    );
  }

  function PersonalRender() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.detailText}>
          <Text style={[styles.labelText, { color: betweenColor }]}>
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
          <Text style={[styles.labelText, { color: betweenColor }]}>
            {"phone" + "\n"}
          </Text>
          <Text style={{ fontSize: 30, color: invertColor }}>
            {details.personal.phone}
          </Text>
        </Text>

        <Text style={styles.detailText}>
          <Text style={[styles.labelText, { color: betweenColor }]}>
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
          <Text style={[styles.labelText, { color: betweenColor }]}>
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
          <Text style={[styles.labelText, { color: betweenColor }]}>
            {"made using" + "\n"}
          </Text>
          <Text style={{ fontSize: 30, color: invertColor }}>
            {details.page.framework}
          </Text>
        </Text>

        <Text style={styles.detailText}>
          <Text style={[styles.labelText, { color: betweenColor }]}>
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
    <ScrollView
      style={[
        styles.container,
        {
          maxHeight: height * (width > height ? 0.9 : 0.45),
          width: width > height ? "90%" : "100%",
        },
      ]}
    >
      <Text style={[styles.titleText, { color: invertColor, paddingTop: 0 }]}>
        Education
      </Text>
      <View>
        <FlatList
          data={educations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => RenderEdu(item)}
          inverted
          ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
          scrollEnabled={false}
        />
      </View>

      <Text style={[styles.titleText, { color: invertColor }]}>Personal</Text>
      {PersonalRender()}

      <Text style={[styles.titleText, { color: invertColor }]}>Page</Text>
      {PageRender()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "flex-end",
    paddingRight: 10,
  },
  titleText: {
    fontFamily: "HelveticaNeue",
    fontSize: 40,
    textTransform: "uppercase",
    paddingTop: 50,
    paddingBottom: 10,
  },
  detailText: {
    fontFamily: "HelveticaNeue",
    textAlign: "right",
    paddingBottom: 10,
  },
  labelText: { fontSize: 20 },
  contentText: { fontSize: 30 },
  buttonText: {
    fontFamily: "HelveticaNeue",
    fontSize: 15,
    textTransform: "uppercase",
  },
  eduText: {
    fontFamily: "HelveticaNeue",
    fontSize: 20,
    textAlign: "right",
  },
  eduCourseText: {
    fontFamily: "HelveticaNeue",
    fontSize: 30,
    textAlign: "right",
  },
});
