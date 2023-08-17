import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Linking,
  useWindowDimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

import useDarkMode from "../hooks/useDarkMode";
import usePopup from "../hooks/usePopup";

export default function ProjectCards({ projectData }) {
  const { width, height } = useWindowDimensions();
  const { invertColor, betweenColor } = useDarkMode();
  const { ShowPopup, SetPopupContent } = usePopup();

  // todo: useContext this
  const [techs, SetTechs] = useState([]);
  useEffect(() => {
    var techComps = [];
    for (let i = 0; i < projectData.technologies.length; i++) {
      techComps.push(
        <>
          <Text
            key={"techComp" + i}
            style={{ textDecorationLine: "underline" }}
            onPress={() => Linking.openURL(projectData.technologies[i].uri)}
          >
            {projectData.technologies[i].name}
          </Text>
          {i < projectData.technologies.length - 1 && <Text>, </Text>}
        </>
      );
    }
    SetTechs(techComps);
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

  function RenderPreviewImage(item, index) {
    return (
      <TouchableOpacity
        style={{
          height: width / (projectData.previewPics.length + 1),
          width: width / (projectData.previewPics.length + 1),
          padding: 5,
        }}
        onPress={() => PopupImage(index)}
      >
        <Image source={item} style={styles.imageStyle} />
      </TouchableOpacity>
    );
  }
  function PopupImage(index) {
    SetPopupContent(
      <Image source={projectData.demoPics[index]} style={styles.imageStyle} />
    );
    ShowPopup();
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
          keyExtractor={(index) => "feature_" + projectData.id + "_" + index}
          renderItem={({ item, index }) => RenderFeature(item, index)}
          contentContainerStyle={{
            alignItems: width > height ? "flex-start" : "flex-end",
          }}
          scrollEnabled={false}
        />

        <Text
          style={[
            styles.titleText,
            {
              textAlign: width > height ? "left" : "right",
              color: betweenColor,
            },
          ]}
        >
          previews
        </Text>
        <FlatList
          data={projectData.previewPics}
          keyExtractor={(index) => "demo_" + projectData.id + "_" + index}
          renderItem={({ item, index }) =>
            index < projectData.previewPics.length / 2 &&
            RenderPreviewImage(item, index)
          }
          style={{ alignSelf: width > height ? "flex-start" : "flex-end" }}
          horizontal={true}
          scrollEnabled={false}
        />
        <FlatList
          data={projectData.previewPics}
          keyExtractor={(index) => "demo_" + projectData.id + "_" + index}
          renderItem={({ item, index }) =>
            index >= projectData.previewPics.length / 2 &&
            RenderPreviewImage(item, index)
          }
          style={{ alignSelf: width > height ? "flex-start" : "flex-end" }}
          horizontal={true}
          scrollEnabled={false}
        />

        <Text
          style={[
            styles.titleText,
            {
              textAlign: width > height ? "left" : "right",
              color: betweenColor,
            },
          ]}
        >
          source code
        </Text>
        <TouchableOpacity
          key={"githubLink" + projectData.id}
          onPress={() => Linking.openURL(projectData.githubURI)}
          style={{
            alignSelf: width > height ? "flex-start" : "flex-end",
            width: 50,
          }}
        >
          <FontAwesome name="github-square" size={50} color={invertColor} />
        </TouchableOpacity>
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
    flex: 1,
    width: "95%",
    paddingRight: 10,
  },
  projTitleText: {
    fontFamily: "HelveticaNeue",
    fontSize: 40,
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
    fontSize: 25,
  },
  featDescText: {
    fontFamily: "HelveticaNeue",
    fontSize: 25,
    includeFontPadding: false,
  },
  imageStyle: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
});
