import { View, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
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
      <View style={{ width: "80%", height: "80%" }}>
        <Swiper
          ref={swiperRef}
          controlsEnabled={false}
          innerContainerStyle={{ overflow: "visible" }}
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
            height: "100%",
            flexDirection: "row",
            position: "absolute",
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
            <SimpleLineIcons
              name="arrow-left"
              size={35}
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
            <SimpleLineIcons
              name="arrow-right"
              size={35}
              color={currentID === projects.length - 1 ? "#99999988" : "black"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
