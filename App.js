import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Business_OnLine } from "./components";
import {
  Home_Screen,
  Login_Screen,
  Registration_Screen,
  Products_Filter_Screen,
} from "./screens";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Previene que se oculte mientras se cargan los recursos de la app
SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

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
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitle: () => <Business_OnLine onLine={true} />,
          }}
        >
          <Stack.Screen
            name="Login"
            options={({ route }) => ({ title: route.params?.name })}
            component={Login_Screen}
          />
          <Stack.Screen
            name="Registración"
            options={({ route }) => ({ title: route.params?.name })}
            component={Registration_Screen}
          />
          <Stack.Screen
            name="Home"
            options={{ title: "Gavani Rotiseria" }}
            component={Home_Screen}
          />
          <Stack.Screen
            name="Lista Productos"
            options={({ route }) => ({ title: route.params?.name })}
            component={Products_Filter_Screen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}
