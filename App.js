import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

import { DarkModeProvider } from "./hooks/useDarkMode";
import { SectionProvider } from "./hooks/useSection";
import useCustomFont from "./hooks/useCustomFont";

import LoadingScreen from "./screens/LoadingScreen";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const fontsLoaded = useCustomFont();

  return fontsLoaded ? (
    <DarkModeProvider>
      <SectionProvider>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <HomeScreen />
        </SafeAreaProvider>
      </SectionProvider>
    </DarkModeProvider>
  ) : (
    <LoadingScreen />
  );
}
