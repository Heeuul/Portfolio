import { View, FlatList } from "react-native";
import React from "react";
import SectionButton from "./SectionButton";
import { sections } from "../contents/sectionContents";

export default function BaseFooter({ UpdateSection }) {
  return (
    <View>
      <FlatList
        data={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SectionButton
            sectionName={item.title}
            OnButtonPress={() => UpdateSection(item.id)}
          />
        )}
        scrollEnabled={false}
      />
    </View>
  );
}
