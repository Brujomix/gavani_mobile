import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Home_Screen,
  Login_Screen,
  Registration_Screen,
  Products_Filter_Screen,
} from "../screens";

const Stack = createNativeStackNavigator();

export function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Login"
          options={"Login"}
          component={Login_Screen}
        />
        <Stack.Screen
          name="Registration"
          options={"Registrarse"}
          component={Registration_Screen}
        />
        <Stack.Screen
          name="Home"
          options={"Home"}
          component={Home_Screen}
        />
        <Stack.Screen
          name="Products_Filter_Screen"
          options={"Productos Filter"}
          component={Products_Filter_Screen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
