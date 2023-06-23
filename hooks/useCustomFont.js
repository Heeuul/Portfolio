export default function useCustomFont() {
  const [fontsLoaded, SetFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      HelveticaNeue: require("./fonts/HelveticaNeue-Light.otf"),
    }).then(() => SetFontLoaded(true));
  }, []);

  return { fontsLoaded };
}
