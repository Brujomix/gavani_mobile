import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Tab_Navigation } from "./navigation";
import { store } from "./redux/store";
import { Provider } from "react-redux";

//Previene que se oculte mientras se cargan los recursos de la app
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat-VariableFont_wght.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Provider store={store}>
      <Tab_Navigation />
      <StatusBar style="light" />
    </Provider>
  );
}
