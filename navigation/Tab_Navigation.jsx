import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Carrito_Screen, Users_Screen } from "../screens";
import { Stack_Navigation_Home } from "./Stack_Navigation_Home";
import { AntDesing_Icon, Business_OnLine } from "../components";
import { paletOfColors } from "../utils/colors";
import { View } from "react-native";

const Tab = createBottomTabNavigator();
const onLine = true;
export function Tab_Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 80,
            borderTopWidth: 2,
            borderTopColor: paletOfColors.black,
          },
          header: () => <Business_OnLine onLine={onLine} />,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Stack_Navigation_Home}
          options={{
            title: "",
            tabBarIcon: () => <AntDesing_Icon name={"home"} size={40} />,
          }}
        />
        <Tab.Screen
          name="Carrito"
          component={Carrito_Screen}
          options={{
            title: "",
            tabBarIcon: () => (
              <AntDesing_Icon name={"shoppingcart"} size={40} />
            ),
          }}
        />
        <Tab.Screen
          name="Usuarios"
          component={Users_Screen}
          options={{
            title: "",
            tabBarIcon: () => <AntDesing_Icon name={"user"} size={40} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
