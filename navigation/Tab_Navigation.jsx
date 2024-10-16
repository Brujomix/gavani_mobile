import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Carrito_Screen, Users_Screen } from "../screens";
import { Stack_Navigation } from "./Stack_Navigation";
import { AntDesing_Icon } from "../components";

const Tab = createBottomTabNavigator();

export function Tab_Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Carrito"
          component={Carrito_Screen}
          options={{
            tabBarIcon: () => (
              <AntDesing_Icon name={"shoppingcart"} size={40} color={"#000"} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Stack_Navigation}
          options={{
            tabBarIcon: () => (
              <AntDesing_Icon name={"home"} size={40} color={"#000"} />
            ),
          }}
        />
        <Tab.Screen
          name="Usuarios"
          component={Users_Screen}
          options={{
            tabBarIcon: () => (
              <AntDesing_Icon name={"user"} size={40} color={"#000"} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
