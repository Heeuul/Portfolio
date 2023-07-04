import { useState, useEffect } from "react";
import * as Font from "expo-font";

export default function useCustomFont() {
  const [fontsLoaded, SetFontsLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      HelveticaNeue: require("../assets/fonts/HelveticaNeue-Light.otf"),
    }).then(() => SetFontsLoaded(true));
  }, []);

  return { fontsLoaded };
}
