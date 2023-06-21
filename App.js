import { Platform, View } from "react-native";

import MobileBase from "./components/MobileBase";
import WebBase from "./components/WebBase";
import { colors } from "./styles";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.light }}>
      {Platform.OS === "web" ? <WebBase /> : <MobileBase />}
    </View>
  );
}
