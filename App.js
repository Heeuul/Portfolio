import { DarkModeProvider } from "./hooks/useDarkMode";
import { SectionProvider } from "./hooks/useSection";
import { PopupProvider } from "./hooks/usePopup";
import useCustomFont from "./hooks/useCustomFont";

import LoadingScreen from "./screens/LoadingScreen";
import HomeScreen from "./screens/HomeScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const { fontsLoaded } = useCustomFont();

  return fontsLoaded ? (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PopupProvider>
        <DarkModeProvider>
          <SectionProvider>
            <HomeScreen />
          </SectionProvider>
        </DarkModeProvider>
      </PopupProvider>
    </GestureHandlerRootView>
  ) : (
    <LoadingScreen />
  );
}
