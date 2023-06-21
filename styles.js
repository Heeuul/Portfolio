import { StyleSheet } from "react-native";

export const colors = {
  accentSoft: "#0043ff",
  accentSharp: "#3C00ff",
  light: "#ededed",
  lightElevated: "#cccccc",
  dark: "#121212",
  darkElevated: "#333333",
};

export const styles = StyleSheet.create({
  swiperButton: {
    color: colors.light,
    backgroundColor: colors.lightElevated,
    fontWeight: "bold",
    borderRadius: 15,
    padding: 5,
  },
});
