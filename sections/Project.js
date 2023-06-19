import {
  FlatList,
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

import { projects } from "../projectContents";

export default function Project() {
  const { width, height } = useWindowDimensions();
  const listRef = useRef(null);
  const [viewProjectIndex, SetViewProjectIndex] = useState(0);

  // useEffect(() => {
  //   listRef.current.scrollToIndex({
  //     animated: true,
  //     index: viewProjectIndex,
  //   });
  // }, [viewProjectIndex]);

  function RenderProjectCard(item) {
    return (
      <View
        style={{
          width: width * 0.8,
          height: height * 0.8,
          borderColor: "grey",
          borderWidth: 1,
          padding: 15,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 50 }}>
          {item.item.name}
        </Text>
        <Text style={{ fontStyle: "italic", fontSize: 25 }}>
          {item.item.description}
        </Text>
      </View>
    );
  }

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
        <FlatList
          ref={listRef}
          data={projects}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={(item) => RenderProjectCard(item)}
          style={{ overflow: "visible", width: "100%", height: "100%" }}
          pagingEnabled
          disableIntervalMomentum
          showsHorizontalScrollIndicator={true}
          // onLayout={() => {
          //   listRef.current.scrollToIndex({
          //     animated: true,
          //     index: viewProjectIndex,
          //   });
          // }}
        />
      </View>

      <View
        style={{
          width: "90%",
          flexDirection: "row",
          justifyContent: "space-between",
          position: "absolute",
        }}
      >
        <TouchableOpacity
          onPress={() => SetViewProjectIndex(viewProjectIndex - 1)}
          disabled={viewProjectIndex === 0}
        >
          <SimpleLineIcons
            name="arrow-left"
            size={35}
            color={viewProjectIndex === 0 ? "#99999988" : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => SetViewProjectIndex(viewProjectIndex + 1)}
          disabled={viewProjectIndex + 1 === projects.length}
        >
          <SimpleLineIcons
            name="arrow-right"
            size={35}
            color={
              viewProjectIndex + 1 === projects.length ? "#99999988" : "black"
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
