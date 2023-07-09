export const projects = [
  {
    id: 0,
    name: "Location Comparison",
    description:
      "Map app to compare travel times from a starting point to multiple destinations.",
    features: [
      "Search Google Map locations with autocomplete",
      "Multiple place support",
      "Compare travel time durations",
    ],
    technologies: [
      {
        name: "Redux Toolkit",
        uri: "https://redux-toolkit.js.org",
      },
      {
        name: "React Google Places Autocomplete",
        uri: "https://github.com/Tintef/react-google-places-autocomplete",
      },
      {
        name: "React Native Maps",
        uri: "https://github.com/react-native-maps/react-native-maps",
      },
      {
        name: "React Native Maps Directions",
        uri: "https://github.com/bramus/react-native-maps-directions",
      },
      {
        name: "React Native Bottom Sheet",
        uri: "https://github.com/gorhom/react-native-bottom-sheet",
      },
    ],
    previewPicPaths: [
      require("../assets/projects/0_LocationComparison/Screenshot_0_LastMinute.png"),
      require("../assets/projects/0_LocationComparison/Screenshot_1_LastMinute.png"),
      require("../assets/projects/0_LocationComparison/Screenshot_2_LastMinute.png"),
      require("../assets/projects/0_LocationComparison/Screenshot_3_LastMinute.png"),
    ],
  },
  {
    id: 1,
    name: "Food Delivery",
    description: "Food ordering system that mimics the Deliveroo app.",
    features: [
      "Viewing & browsing contents from backend",
      "Screen transitions",
      "Mock ordering system",
      "Display restaurants’ location on Google Maps",
    ],
    technologies: [
      {
        name: "Sanity.io",
        uri: "https://www.sanity.io",
      },
      {
        name: "Redux Toolkit",
        uri: "https://redux-toolkit.js.org",
      },
      {
        name: "React Currency Formatter",
        uri: "https://github.com/xDae/react-currency-formatter",
      },
      {
        name: "React Native Animatable",
        uri: "https://github.com/oblador/react-native-animatable",
      },
      {
        name: "React Native Progress",
        uri: "https://github.com/oblador/react-native-progress",
      },
      {
        name: "React Native Maps",
        uri: "https://github.com/react-native-maps/react-native-maps",
      },
      {
        name: "Heroicons for React",
        uri: "https://www.npmjs.com/package/heroicons",
      },
    ],
    previewPicPaths: [
      require("../assets/projects/1_FoodDelivery/Screenshot_0_Deliveroo.png"),
      require("../assets/projects/1_FoodDelivery/Screenshot_1_Deliveroo.png"),
      require("../assets/projects/1_FoodDelivery/Screenshot_2_Deliveroo.png"),
      require("../assets/projects/1_FoodDelivery/Screenshot_3_Deliveroo.png"),
      require("../assets/projects/1_FoodDelivery/Screenshot_4_Deliveroo.png"),
      require("../assets/projects/1_FoodDelivery/Screenshot_5_Deliveroo.png"),
    ],
  },
  {
    id: 2,
    name: "Online Dating Match",
    description: "Mimic of the Tinder app.",
    features: [
      "Profile creation & authentication",
      "Profile card swipings",
      "Matching algorithm",
      "Private messaging",
    ],
    technologies: [
      {
        name: "Expo Auth Session",
        uri: "https://www.npmjs.com/package/expo-auth-session",
      },
      {
        name: "Firebase Authentication",
        uri: "https://firebase.google.com/docs/auth",
      },
      {
        name: "Firebase Firestore",
        uri: "https://firebase.google.com/docs/firestore",
      },
      {
        name: "React Native Deck Swiper",
        uri: "https://github.com/webraptor/react-native-deck-swiper",
      },
      {
        name: "Expo Application Services",
        uri: "https://github.com/expo/eas-cli",
      },
    ],
    previewPicPaths: [],
  },
  {
    id: 3,
    name: "Instant Messaging",
    description: "Mimic of the Signal app.",
    features: [
      "Google account sign in",
      "Profile creation & authenthication",
      "Group chat creations & messagings",
      "Web support",
    ],
    technologies: [
      {
        name: "Firebase Authentication",
        uri: "https://firebase.google.com/docs/auth",
      },
      {
        name: "Firebase Firestore",
        uri: "https://firebase.google.com/docs/firestore",
      },
      {
        name: "React Native Elements",
        uri: "https://reactnativeelements.com/",
      },
      {
        name: "React Native for Web",
        uri: "https://necolas.github.io/react-native-web/",
      },
    ],
    previewPicPaths: [],
  },
  {
    id: 4,
    name: "Statistics Tracker",
    description:
      "Cryptocurrency price tracker interface app for CoinGecko API.",
    features: [
      "Onboarding introductions",
      "List view of multiple currency statistics",
      "Graph visualisation of price changes for the past 7 days",
    ],
    technologies: [
      {
        name: "CoinGecko API",
        uri: "https://www.coingecko.com/en/api",
      },
      {
        name: "React Native Onboard",
        uri: "https://github.com/FrigadeHQ/react-native-onboard",
      },
      {
        name: "React Native Bottom Sheet",
        uri: "https://github.com/gorhom/react-native-bottom-sheet",
      },
      {
        name: "React Native Animated Charts",
        uri: "https://github.com/rainbow-me/react-native-animated-charts",
      },
      {
        name: "Axios",
        uri: "https://github.com/qiangmao/axios",
      },
      {
        name: "Moment",
        uri: "https://momentjs.com",
      },
    ],
    previewPicPaths: [],
  },
];
