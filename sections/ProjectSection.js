import { View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import Swiper from "react-native-web-swiper";

import ProjectCards from "../components/ProjectCards";
import { projects } from "../contents/projectContents";
import { colors } from "../styles";

export default function Project() {
  const swiperRef = useRef(null);
  const [currentID, SetCurrentID] = useState(0);

  return (
    <View
      style={{
        width: "90%",
        height: "90%",
        alignSelf: "center",
      }}
    >
      <Swiper
        ref={swiperRef}
        controlsEnabled={false}
        innerContainerStyle={{
          overflow: "visible",
          backgroundColor: colors.lightElevated,
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
      <View
        style={{
          width: "100%",
          position: "absolute",
          flexDirection: "row",
          bottom: 0,
          transform: [{ scaleY: -1 }],
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
          <AntDesign
            name="swapleft"
            size={55}
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
          <AntDesign
            name="swapright"
            size={55}
            color={currentID === projects.length - 1 ? "#99999988" : "black"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
