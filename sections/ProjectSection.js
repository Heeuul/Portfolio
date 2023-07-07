import { View, TouchableOpacity, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Swiper from "react-native-web-swiper";

import ProjectCards from "../components/ProjectCards";
import { projects } from "../contents/projectContents";
import useDarkMode from "../hooks/useDarkMode";

export default function Project() {
  const { invertColor } = useDarkMode();

  const swiperRef = useRef(null);
  const [currentID, SetCurrentID] = useState(0);

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        controlsEnabled={false}
        innerContainerStyle={{
          overflow: "visible",
          borderRadius: 15,
        }}
        onIndexChanged={(newIndex) => SetCurrentID(newIndex)}
      >
        <ProjectCards projectData={projects[0]} />
        <ProjectCards projectData={projects[1]} />
        <ProjectCards projectData={projects[2]} />
        <ProjectCards projectData={projects[3]} />
        <ProjectCards projectData={projects[4]} />
      </Swiper>
      <View style={styles.navContainer} pointerEvents="box-none">
        <TouchableOpacity
          onPress={() => {
            swiperRef.current.goToPrev();
            SetCurrentID(currentID - 1);
          }}
          disabled={currentID === 0}
        >
          <AntDesign
            name="swapleft"
            size={55}
            color={currentID === 0 ? "transparent" : invertColor}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            swiperRef.current.goToNext();
            SetCurrentID(currentID + 1);
          }}
          disabled={currentID === projects.length - 1}
        >
          <AntDesign
            name="swapright"
            size={55}
            color={
              currentID === projects.length - 1 ? "transparent" : invertColor
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "98%",
    height: "98%",
    alignSelf: "center",
  },
  navContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    transform: [{ scaleY: -1 }],
  },
});
