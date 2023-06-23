import { View, TouchableOpacity, Platform } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import Swiper from "react-native-web-swiper";

import ProjectCards from "../components/ProjectCards";
import { projects } from "../contents/projectContents";

export default function Project() {
  const swiperRef = useRef(null);
  const [currentID, SetCurrentID] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{ width: "80%", height: "80%" }}
        pointerEvents={Platform.OS === "web" ? "none" : "box-none"}
      >
        <Swiper
          ref={swiperRef}
          controlsEnabled={false}
          gesturesEnabled={() => false}
          innerContainerStyle={{ overflow: "visible" }}
          onIndexChanged={(newIndex) => SetCurrentID(newIndex)}
          pointerEvents="none"
        >
          <ProjectCards projectData={projects[0]} />
          <ProjectCards projectData={projects[1]} />
          <ProjectCards projectData={projects[2]} />
          <ProjectCards projectData={projects[3]} />
          <ProjectCards projectData={projects[4]} />
        </Swiper>
      </View>
      <View
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        pointerEvents="box-none"
      >
        <TouchableOpacity
          onPress={() => {
            swiperRef.current.goToPrev();
            SetCurrentID(currentID - 1);
          }}
          disabled={currentID === 0}
        >
          <Entypo
            name="chevron-thin-left"
            size={45}
            color={currentID === 0 ? "#99999988" : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            swiperRef.current.goToNext();
            SetCurrentID(currentID + 1);
          }}
          disabled={currentID === projects.length - 1}
        >
          <Entypo
            name="chevron-thin-right"
            size={45}
            color={currentID === projects.length - 1 ? "#99999988" : "black"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
