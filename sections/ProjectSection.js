import { View, TouchableOpacity, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Swiper from "react-native-web-swiper";

import ProjectCards from "../components/ProjectCards";
import { projects } from "../contents/projectContents";
import useDarkMode from "../hooks/useDarkMode";

export default function Project() {
  const { modeColor, invertColor } = useDarkMode();

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
        <ProjectCards key={"LocationComparison"} projectData={projects[0]} />
        <ProjectCards key={"FoodDelivery"} projectData={projects[1]} />
        <ProjectCards key={"OnlineDatingMatch"} projectData={projects[2]} />
        <ProjectCards key={"InstantMessaging"} projectData={projects[3]} />
        <ProjectCards key={"StatisticsTracker"} projectData={projects[4]} />
      </Swiper>
      <View style={styles.navContainer} pointerEvents="box-none">
        <TouchableOpacity
          onPress={() => {
            swiperRef.current.goToPrev();
            SetCurrentID(currentID - 1);
          }}
          disabled={currentID === 0}
          style={{
            backgroundColor: currentID === 0 ? "transparent" : modeColor + "88",
            borderRadius: 50,
          }}
        >
          <AntDesign
            name="swapleft"
            size={50}
            color={currentID === 0 ? "transparent" : invertColor}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            swiperRef.current.goToNext();
            SetCurrentID(currentID + 1);
          }}
          disabled={currentID === projects.length - 1}
          style={{
            backgroundColor:
              currentID === projects.length - 1
                ? "transparent"
                : modeColor + "88",
            borderRadius: 50,
          }}
        >
          <AntDesign
            name="swapright"
            size={50}
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
