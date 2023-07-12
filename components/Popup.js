import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import usePopup from "../hooks/usePopup";

export default function Popup() {
  const { isPopup, popupContent, HidePopup } = usePopup();
  return (
    isPopup && (
      <TouchableOpacity
        style={styles.popupContainer}
        onPress={() => HidePopup()}
      >
        {popupContent}
      </TouchableOpacity>
    )
  );
}

const styles = StyleSheet.create({
  popupContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000aa",
  },
});
