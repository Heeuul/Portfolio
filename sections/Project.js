import { View, useWindowDimensions, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

import Swiper from "react-native-web-swiper";
import ProjectCards from "../components/ProjectCards";

export default function Project() {
  const windowSize = useWindowDimensions();
  const swiperRef = useRef(null);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#C9E4DE",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "80%",
          height: "80%",
        }}
      >
        <Swiper
          ref={swiperRef}
          controlsEnabled={false}
          innerContainerStyle={{ overflow: "visible" }}
        >
          <ProjectCards windowSize={windowSize} ID={0} />
          <ProjectCards windowSize={windowSize} ID={1} />
          <ProjectCards windowSize={windowSize} ID={2} />
          <ProjectCards windowSize={windowSize} ID={3} />
          <ProjectCards windowSize={windowSize} ID={4} />
          <ProjectCards windowSize={windowSize} ID={5} />
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
        >
          <TouchableOpacity onPress={() => swiperRef.current.goToPrev()}>
            <SimpleLineIcons
              name="arrow-left"
              size={35}
              color={
                swiperRef.current.getActiveIndex() <= 1 ? "#99999988" : "black"
              }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => swiperRef.current.goToNext()}>
            <SimpleLineIcons name="arrow-right" size={35} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
