import { createContext, useContext, useMemo, useState } from "react";
import { sections } from "../contents/sectionContents";

const SectionContext = createContext({});
export const SectionProvider = ({ children }) => {
  const [currentSectionID, SetSectionID] = useState(sections.length - 1);

  const sectionMemo = useMemo(
    () => ({
      currentSectionID,
      currentSectionData: sections[currentSectionID],
      SetSection: (ID) => SetSectionID(ID),
      GetSectionData: (ID) => sections[ID],
    }),
    [currentSectionID]
  );

  return (
    <SectionContext.Provider value={sectionMemo}>
      {children}
    </SectionContext.Provider>
  );
};

export default function useSection() {
  return useContext(SectionContext);
}
