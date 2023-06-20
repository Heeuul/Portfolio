import { FlatList, View, useWindowDimensions } from "react-native";
import { sections } from "./contents/sectionContents";

export default function App() {
  const { width, height } = useWindowDimensions();

  return (
    <FlatList
      data={sections}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{ width: width, height: height }}>{item.component}</View>
      )}
    />
  );
}
