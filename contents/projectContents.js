export const projects = [
  {
    id: 5,
    githubURI: "https://github.com/Heeuul/WebLib",
    name: "Book Library",
    description:
      "Full stack web app to store book details by performing basic CRUD features, and run in docker-compose environment.",
    features: [
      "Add books to database",
      "Search for books using keywords",
      "Edit existing book details",
      "List all books in database",
      "Display book details",
    ],
    technologies: [
      {
        name: "ReactJS",
        uri: "https://react.dev",
      },
      {
        name: "MaterialUI",
        uri: "https://mui.com",
      },
      {
        name: "Spring Boot",
        uri: "https://spring.io/projects/spring-boot",
      },
      {
        name: "Spring Data JPA",
        uri: "https://spring.io/projects/spring-data-jpa",
      },
      {
        name: "MySQL",
        uri: "https://www.mysql.com",
      },
      {
        name: "Docker",
        uri: "https://www.docker.com",
      },
    ],
    demoPics: [
      require("../assets/projects/5_BookLibrary/Screenshot_0_WebLib.jpeg"),
      require("../assets/projects/5_BookLibrary/Screenshot_1_WebLib.jpeg"),
      require("../assets/projects/5_BookLibrary/Screenshot_2_WebLib.jpeg"),
      require("../assets/projects/5_BookLibrary/Screenshot_3_WebLib.jpeg"),
    ],
    previewPics: [
      require("../assets/projects/5_BookLibrary/previews/preview_0_WebLib.jpeg"),
      require("../assets/projects/5_BookLibrary/previews/preview_1_WebLib.jpeg"),
      require("../assets/projects/5_BookLibrary/previews/preview_2_WebLib.jpeg"),
      require("../assets/projects/5_BookLibrary/previews/preview_3_WebLib.jpeg"),
    ],
  },
  {
    id: 4,
    githubURI: "https://github.com/Heeuul/LastMinute",
    name: "Location Comparison",
    description:
      "Map mobile app to compare travel times from a starting point to multiple destinations.",
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
    demoPics: [
      require("../assets/projects/4_LocationComparison/Screenshot_0_LastMinute.png"),
      require("../assets/projects/4_LocationComparison/Screenshot_1_LastMinute.png"),
      require("../assets/projects/4_LocationComparison/Screenshot_2_LastMinute.png"),
      require("../assets/projects/4_LocationComparison/Screenshot_3_LastMinute.png"),
    ],
    previewPics: [
      require("../assets/projects/4_LocationComparison/previews/preview_0_LastMinute.jpg"),
      require("../assets/projects/4_LocationComparison/previews/preview_1_LastMinute.jpg"),
      require("../assets/projects/4_LocationComparison/previews/preview_2_LastMinute.jpg"),
      require("../assets/projects/4_LocationComparison/previews/preview_3_LastMinute.jpg"),
    ],
  },
  {
    id: 3,
    githubURI: "https://github.com/Heeuul/deliveroo-clone",
    name: "Food Delivery",
    description: "Food ordering system that mimics the Deliveroo mobile app.",
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
    demoPics: [
      require("../assets/projects/3_FoodDelivery/Screenshot_0_Deliveroo.png"),
      require("../assets/projects/3_FoodDelivery/Screenshot_1_Deliveroo.png"),
      require("../assets/projects/3_FoodDelivery/Screenshot_2_Deliveroo.png"),
      require("../assets/projects/3_FoodDelivery/Screenshot_3_Deliveroo.png"),
      require("../assets/projects/3_FoodDelivery/Screenshot_4_Deliveroo.png"),
      require("../assets/projects/3_FoodDelivery/Screenshot_5_Deliveroo.png"),
    ],
    previewPics: [
      require("../assets/projects/3_FoodDelivery/previews/preview_0_Deliveroo.jpg"),
      require("../assets/projects/3_FoodDelivery/previews/preview_1_Deliveroo.jpg"),
      require("../assets/projects/3_FoodDelivery/previews/preview_2_Deliveroo.jpg"),
      require("../assets/projects/3_FoodDelivery/previews/preview_3_Deliveroo.jpg"),
      require("../assets/projects/3_FoodDelivery/previews/preview_4_Deliveroo.jpg"),
      require("../assets/projects/3_FoodDelivery/previews/preview_5_Deliveroo.jpg"),
    ],
  },
  {
    id: 2,
    githubURI: "https://github.com/Heeuul/tinder-clone",
    name: "Online Dating Match",
    description: "Online dating system mimic of the Tinder mobile app.",
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
    demoPics: [
      require("../assets/projects/2_OnlineDatingMatch/Screenshot_0_TinderClone.png"),
      require("../assets/projects/2_OnlineDatingMatch/Screenshot_1_TinderClone.png"),
      require("../assets/projects/2_OnlineDatingMatch/Screenshot_2_TinderClone.png"),
      require("../assets/projects/2_OnlineDatingMatch/Screenshot_3_TinderClone.png"),
      require("../assets/projects/2_OnlineDatingMatch/Screenshot_4_TinderClone.png"),
      require("../assets/projects/2_OnlineDatingMatch/Screenshot_5_TinderClone.png"),
      require("../assets/projects/2_OnlineDatingMatch/Screenshot_6_TinderClone.png"),
      require("../assets/projects/2_OnlineDatingMatch/Screenshot_7_TinderClone.png"),
    ],
    previewPics: [
      require("../assets/projects/2_OnlineDatingMatch/previews/preview_0_TinderClone.jpg"),
      require("../assets/projects/2_OnlineDatingMatch/previews/preview_1_TinderClone.jpg"),
      require("../assets/projects/2_OnlineDatingMatch/previews/preview_2_TinderClone.jpg"),
      require("../assets/projects/2_OnlineDatingMatch/previews/preview_3_TinderClone.jpg"),
      require("../assets/projects/2_OnlineDatingMatch/previews/preview_4_TinderClone.jpg"),
      require("../assets/projects/2_OnlineDatingMatch/previews/preview_5_TinderClone.jpg"),
      require("../assets/projects/2_OnlineDatingMatch/previews/preview_6_TinderClone.jpg"),
      require("../assets/projects/2_OnlineDatingMatch/previews/preview_7_TinderClone.jpg"),
    ],
  },
  {
    id: 1,
    githubURI: "https://github.com/Heeuul/signal-clone",
    name: "Instant Messaging",
    description: "Messaging system mimic of the Signal app.",
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
    demoPics: [
      require("../assets/projects/1_InstantMessaging/Screenshot_0_Signal.png"),
      require("../assets/projects/1_InstantMessaging/Screenshot_1_Signal.png"),
      require("../assets/projects/1_InstantMessaging/Screenshot_2_Signal.png"),
      require("../assets/projects/1_InstantMessaging/Screenshot_3_Signal.png"),
      require("../assets/projects/1_InstantMessaging/Screenshot_4_Signal.png"),
      require("../assets/projects/1_InstantMessaging/Screenshot_5_Signal.png"),
    ],
    previewPics: [
      require("../assets/projects/1_InstantMessaging/previews/preview_0_Signal.jpg"),
      require("../assets/projects/1_InstantMessaging/previews/preview_1_Signal.jpg"),
      require("../assets/projects/1_InstantMessaging/previews/preview_2_Signal.jpg"),
      require("../assets/projects/1_InstantMessaging/previews/preview_3_Signal.jpg"),
      require("../assets/projects/1_InstantMessaging/previews/preview_4_Signal.jpg"),
      require("../assets/projects/1_InstantMessaging/previews/preview_5_Signal.jpg"),
    ],
  },
  {
    id: 0,
    githubURI: "https://github.com/Heeuul/CryptoPriceTracker",
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
    demoPics: [
      require("../assets/projects/0_StatisticsTracker/Screenshot_0_CryptoPriceTracker.png"),
      require("../assets/projects/0_StatisticsTracker/Screenshot_1_CryptoPriceTracker.png"),
      require("../assets/projects/0_StatisticsTracker/Screenshot_2_CryptoPriceTracker.png"),
      require("../assets/projects/0_StatisticsTracker/Screenshot_3_CryptoPriceTracker.png"),
    ],
    previewPics: [
      require("../assets/projects/0_StatisticsTracker/previews/preview_0_CryptoPriceTracker.jpg"),
      require("../assets/projects/0_StatisticsTracker/previews/preview_1_CryptoPriceTracker.jpg"),
      require("../assets/projects/0_StatisticsTracker/previews/preview_2_CryptoPriceTracker.jpg"),
      require("../assets/projects/0_StatisticsTracker/previews/preview_3_CryptoPriceTracker.jpg"),
    ],
  },
];
