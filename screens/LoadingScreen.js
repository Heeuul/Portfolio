import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function LoadingScreen() {
  return (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    width: "100%",
    height: "100%",
  },
  loadingText: {
    fontFamily: "HelveticaNeue",
    fontWeight: "bold",
    fontSize: 50,
  },
});
