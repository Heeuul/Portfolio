import { View, FlatList } from "react-native";
import React from "react";

import SectionButton from "./SectionButton";
import { sections } from "../contents/sectionContents";

export default function BaseFooter() {
  return (
    <View>
      <FlatList
        data={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SectionButton sectionID={item.id} />}
        scrollEnabled={false}
      />
    </View>
  );
}
