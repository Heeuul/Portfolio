import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";

import MobileBase from "./components/MobileBase";
import WebBase from "./components/WebBase";
import { colors } from "./styles";
import { useState } from "react";
import { useFonts } from "expo-font";

export default function App() {
  const [section, SetSection] = useState("Introduction");
  const [darkMode, SetDarkMode] = useState(false);
  const [fontsLoaded] = useFonts({ HelveticaNeue: require("./fonts/HelveticaNeue-Light.otf") });

  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

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
          flexDirection: isLandscape ? "row" : "column",
          justifyContent: "space-between",
        }}
      >
        {/* Left Half */}
        <View style={{ justifyContent: "space-between" }}>
          {/* Top Left */}
          <View>
            <Text
              style={{
                fontFamily: "HelveticaNeue",
                fontSize: 65,
                borderBottomWidth: 2,
                lineHeight: 75,
              }}
            >
              Aiman Hans
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/270px-React-icon.svg.png",
                }}
                style={{
                  resizeMode: "contain",
                  width: 55,
                  height: 55,
                  marginHorizontal: 5,
                }}
              />
              <View style={{}}>
                <Text style={{ fontFamily: "HelveticaNeue", fontSize: 30, padding: 0 }}>
                  React Native
                </Text>
                <Text style={{ fontFamily: "HelveticaNeue", fontSize: 15, padding: 1 }}>
                  Developer/Programmer
                </Text>
              </View>
            </View>
          </View>
          {/* Bot Left */}
          <View>
            <TouchableOpacity
              style={
                true
                  ? { ...styles.sectionButton, backgroundColor: "#ababab" }
                  : { ...styles.sectionButton, backgroundColor: "white" }
              }
              onPress={() => SetSection("Introduction")}
            >
              <Text style={{ fontSize: 20, color: "#dedede" }}>Introduction</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton} onPress={() => SetSection("Projects")}>
              <Text style={styles.sectionButtonText}>Projects</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton} onPress={() => SetSection("Skills")}>
              <Text style={styles.sectionButtonText}>Skills</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sectionButton}
              onPress={() => SetSection("Experiences")}
            >
              <Text style={styles.sectionButtonText}>Experiences</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton} onPress={() => SetSection("Educations")}>
              <Text style={styles.sectionButtonText}>Educations</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sectionButton}
              onPress={() => SetSection("Additionals")}
            >
              <Text style={styles.sectionButtonText}>Additionals</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Right Half */}
        <View
          style={{
            alignItems: "flex-end",
            backgroundColor: "lightblue",
            flexGrow: 1,
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
    borderLeftWidth: 2,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  sectionButtonText: {
    fontFamily: "HelveticaNeue",
    fontSize: 20,
  },
});
