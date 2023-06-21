import { FlatList, View, useWindowDimensions } from "react-native";
import React from "react";

import { sections } from "../contents/sectionContents";
import { colors } from "../styles";

export default function MobileBase() {
  const { width, height } = useWindowDimensions();

  return (
    <FlatList
      data={sections}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{ width: width, height: height }}>{item.component}</View>
      )}
      pagingEnabled={true}
      style={{ flex: 1, backgroundColor: colors.light }}
    />
  );
}
