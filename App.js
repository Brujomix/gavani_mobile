import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Tab_Navigation } from "./navigation";
import { store } from "./redux/store";
import { Provider, useSelector } from "react-redux";
import { fetchUser } from "./db/crudUsers";

//Previene que se oculte mientras se cargan los recursos de la app
//import { user } from "./db/createTable";

/* user()
  .then((res) => console.warn("tabla user ok", res))
  .catch((error) => console.error("Error al Crear la Tabla User", error)); */

SplashScreen.preventAutoHideAsync();

export default function App() {
  //const { infoUser } = useSelector((state) => state.User);
  const [loaded, error] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat-VariableFont_wght.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  /* useEffect(() => {
    if (infoUser) {
      (async () => {
        try {
          const users = await fetchUser();
          console.log(users);
        } catch (error) {
          console.error("Error al Obtener Ussuarios", error);
        }
      })();
    }
  }, [infoUser]); */

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
