import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import MobileBase from "./components/MobileBase";
import WebBase from "./components/WebBase";
import { colors } from "./styles";
import { useState } from "react";

export default function App() {
  const [section, SetSection] = useState("Introduction");

  function GetSection() {
    switch (section) {
      case "Introduction":
        return <Text>Introduction</Text>;
      case "Projects":
        return <Text>Projects</Text>;
      case "Skills":
        return <Text>Skills</Text>;
      case "Experiences":
        return <Text>Experiences</Text>;
      case "Educations":
        return <Text>Educations</Text>;
      case "Additionals":
        return <Text>Additionals</Text>;

      default:
        return <View />;
    }
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.light,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Inner View */}
      <View
        style={{
          width: "90%",
          height: "90%",
          flexDirection: "row",
          justifyContent: "space-between",
          borderWidth: 1,
        }}
      >
        {/* Left Half */}
        <View style={{ justifyContent: "space-between" }}>
          {/* Top Left */}
          <View style={{ backgroundColor: "pink" }}>
            <Text style={{ fontSize: 75, includeFontPadding: false }}>Aiman Hans</Text>
            <Text style={{ fontSize: 30, includeFontPadding: false }}>React Native Developer</Text>
          </View>
          {/* Bot Left */}
          <View>
            <TouchableOpacity
              style={true ? { ...styles.sectionButton, backgroundColor: "#ababab" } : { ...styles.sectionButton, backgroundColor: "white" }}
              onPress={() => SetSection("Introduction")}
            >
              <Text style={{ fontSize: 20, color: "#dedede" }}>Introduction</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton} onPress={() => SetSection("Projects")}>
              <Text style={{ fontSize: 20 }}>Projects</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton} onPress={() => SetSection("Skills")}>
              <Text style={{ fontSize: 20 }}>Skills</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton} onPress={() => SetSection("Experiences")}>
              <Text style={{ fontSize: 20 }}>Experiences</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton} onPress={() => SetSection("Educations")}>
              <Text style={{ fontSize: 20 }}>Educations</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton} onPress={() => SetSection("Additionals")}>
              <Text style={{ fontSize: 20 }}>Additionals</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Right Half */}
        <View
          style={{
            alignItems: "flex-end",
            backgroundColor: "lightblue",
          }}
        >
          <GetSection />
        </View>
      </View>
    </View>
  );
}

// export default function App() {
//   return (
//     <View style={{ flex: 1, backgroundColor: colors.light }}>
//       {Platform.OS === "web" ? <WebBase /> : <MobileBase />}
//     </View>
//   );
// }

const styles = StyleSheet.create({
  sectionButton: {
    alignSelf: "flex-start",
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 5,
    backgroundColor: "darkseagreen",
  },
});
