import { View, TouchableOpacity, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Swiper from "react-native-web-swiper";

import { projects } from "../contents/projectContents";
import ProjectCards from "../components/ProjectCards";
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
        innerContainerStyle={styles.swiperContainer}
        onIndexChanged={(newIndex) => SetCurrentID(newIndex)}
      >
        <ProjectCards key={"BookLibrary"} projectData={projects[0]} />
        <ProjectCards key={"LocationComparison"} projectData={projects[1]} />
        <ProjectCards key={"FoodDelivery"} projectData={projects[2]} />
        <ProjectCards key={"OnlineDatingMatch"} projectData={projects[3]} />
        <ProjectCards key={"InstantMessaging"} projectData={projects[4]} />
        <ProjectCards key={"StatisticsTracker"} projectData={projects[5]} />
        <ProjectCards key={"WebBrowserGame"} projectData={projects[6]} />
        <ProjectCards key={"TimeStepSimulation"} projectData={projects[7]} />
        <ProjectCards key={"TileExploration"} projectData={projects[8]} />
        <ProjectCards key={"SpecialisedCalculator"} projectData={projects[9]} />
      </Swiper>
      <View style={styles.navContainer} pointerEvents="box-none">
        <TouchableOpacity
          onPress={() => {
            swiperRef.current.goToPrev();
            SetCurrentID(currentID - 1);
          }}
          disabled={currentID === 0}
          style={{
            backgroundColor: currentID === 0 ? "transparent" : modeColor + "e9",
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
                : modeColor + "e9",
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
  swiperContainer: {
    overflow: "visible",
    borderRadius: 15,
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
