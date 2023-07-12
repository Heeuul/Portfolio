import React, { createContext, useContext, useMemo, useState } from "react";

const PopupContext = createContext({});
export const PopupProvider = ({ children }) => {
  const [popup, SetPopup] = useState(false);
  const [popupContent, SetPopupContent] = useState(null);

  const popupMemo = useMemo(
    () => ({
      isPopup: popup,
      popupContent: popupContent,
      ShowPopup: () => SetPopup(true),
      HidePopup: () => SetPopup(false),
      TogglePopup: () => SetPopup(!popup),
      SetPopupContent: (content) => SetPopupContent(content),
    }),
    [popup, popupContent]
  );

  return (
    <PopupContext.Provider value={popupMemo}>{children}</PopupContext.Provider>
  );
};

export default function usePopup() {
  return useContext(PopupContext);
}
