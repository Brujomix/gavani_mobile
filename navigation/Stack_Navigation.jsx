import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Home_Screen,
  Login_Screen,
  Registration_Screen,
  Products_Filter_Screen,
} from "../screens";

const Stack = createNativeStackNavigator();

export function Stack_Navigation() {
  return (
 
      <Stack.Navigator initialRouteName="Home">
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
          options={({ route }) => ({ title: route.params?.cat_name })}
          component={Products_Filter_Screen}
        />
      </Stack.Navigator>

  );
}
