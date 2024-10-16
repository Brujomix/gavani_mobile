import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Carrito_Screen, Users_Screen } from "../screens";
import { Stack_Navigation } from "./Stack_Navigation";
import { AntDesing_Icon } from "../components";
import { paletOfColors } from "../utils/colors";

const Tab = createBottomTabNavigator();

export function Tab_Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: paletOfColors.black,
          tabBarInactiveTintColor: paletOfColors.darkGray,
        }}
      >
        <Tab.Screen
          name="Carrito"
          component={Carrito_Screen}
          options={{
            title:"",
            tabBarIcon: () => (
              <AntDesing_Icon name={"shoppingcart"} size={40} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Stack_Navigation}
          options={{
            title:"",
            tabBarIcon: () => (
              <AntDesing_Icon name={"home"} size={40} />
            ),
          }}
        />
        <Tab.Screen
          name="Usuarios"
          component={Users_Screen}
          options={{
            title:"",
            tabBarIcon: () => (
              <AntDesing_Icon name={"user"} size={40}/>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
