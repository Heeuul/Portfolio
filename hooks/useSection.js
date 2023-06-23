import { View, Text } from "react-native";
import React from "react";
import { sections } from "../contents/sectionContents";

export default function useSection() {
  const [sectionID, SetSectionID] = useState(0);

  return 
  {
    sectionID, 
  };
}
