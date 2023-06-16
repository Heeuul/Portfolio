import { FlatList, View, useWindowDimensions } from "react-native";
import { contents } from "./contents";

export default function App() {
  const { width, height } = useWindowDimensions();

  return (
    <FlatList
      data={contents}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{ width: width, height: height }}>{item.component}</View>
      )}
    />
  );
}
