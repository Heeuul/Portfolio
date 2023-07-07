import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Linking,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";

import useDarkMode from "../hooks/useDarkMode";

export default function ProjectCards({ projectData }) {
  const { width, height } = useWindowDimensions();
  const { invertColor, betweenColor } = useDarkMode();

  const [techs, SetTech] = useState([]);
  useEffect(() => {
    var techComps = [];
    for (let i = 0; i < projectData.technologies.length; i++) {
      techComps.push(
        <>
          <Text
            key={i}
            style={{ textDecorationLine: "underline" }}
            onPress={() => Linking.openURL(projectData.technologies[i].uri)}
          >
            {projectData.technologies[i].name}
          </Text>
          {i < projectData.technologies.length - 1 && <Text>, </Text>}
        </>
      );
    }

    SetTech(techComps);
  }, []);

  function RenderFeature(item, index) {
    return (
      <View style={{ flexDirection: "row" }}>
        {width > height && (
          <Text style={[styles.featDescText, { color: invertColor }]}>
            {"(" + (index + 1) + ") "}
          </Text>
        )}
        <Text
          style={[
            styles.featDescText,
            {
              textAlign: width > height ? "left" : "right",
              color: invertColor,
            },
          ]}
        >
          {item}
        </Text>
        {height > width && (
          <Text style={[styles.featDescText, { color: invertColor }]}>
            {" (" + (index + 1) + ")"}
          </Text>
        )}
      </View>
    );
  }

  return (
    <View
      key={projectData.id}
      style={[styles.container, { borderColor: betweenColor }]}
    >
      <ScrollView style={styles.contentContainer}>
        <Text
          style={[
            styles.projTitleText,
            {
              color: invertColor,
              textAlign: width > height ? "left" : "right",
            },
          ]}
        >
          {projectData.name}
        </Text>

        <Text
          style={[
            styles.projDescText,
            {
              color: betweenColor,
              textAlign: width > height ? "left" : "right",
            },
          ]}
        >
          {projectData.description}
        </Text>

        <Text
          style={[
            styles.titleText,
            {
              textAlign: width > height ? "left" : "right",
              color: betweenColor,
            },
          ]}
        >
          technologies
        </Text>
        <Text
          style={[
            styles.techDescText,
            {
              textAlign: width > height ? "left" : "right",
              color: invertColor,
            },
          ]}
        >
          {techs}
        </Text>

        <Text
          style={[
            styles.titleText,
            {
              textAlign: width > height ? "left" : "right",
              color: betweenColor,
            },
          ]}
        >
          features
        </Text>
        <FlatList
          data={projectData.features}
          key={({ index }) => "feature" + index}
          renderItem={({ item, index }) => RenderFeature(item, index)}
          contentContainerStyle={{
            alignItems: width > height ? "flex-start" : "flex-end",
          }}
          scrollEnabled={false}
        />
        <Text
          style={{
            fontFamily: "HelveticaNeue",
            color: betweenColor,
            textAlign: "center",
            borderWidth: 1,
            paddingVertical: 10,
            borderColor: betweenColor,
          }}
        >
          *images to be added soon*
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 2,
    borderRadius: 10,
  },
  contentContainer: {
    width: "95%",
    height: "95%",
  },
  projTitleText: {
    fontFamily: "HelveticaNeue",
    fontSize: 30,
  },
  projDescText: {
    fontFamily: "HelveticaNeue",
    fontSize: 20,
    includeFontPadding: false,
  },
  titleText: {
    paddingTop: 10,
    fontFamily: "HelveticaNeue",
    fontSize: 20,
  },
  techDescText: {
    fontFamily: "HelveticaNeue",
    fontSize: 15,
    includeFontPadding: false,
  },
  featDescText: {
    fontFamily: "HelveticaNeue",
    fontSize: 18,
    includeFontPadding: false,
  },
});
