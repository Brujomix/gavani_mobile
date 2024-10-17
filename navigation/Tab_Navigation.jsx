import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Carrito_Screen, Users_Screen } from "../screens";
import { Stack_Navigation_Home } from "./Stack_Navigation_Home";
import { AntDesing_Icon, Business_OnLine } from "../components";
import { paletOfColors } from "../utils/colors";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();
const onLine = false;

export function Tab_Navigation() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomePage"
        screenOptions={{
          tabBarStyle: styles.tabBarStyle,
          header: () => <Business_OnLine onLine={onLine} />,
        }}
      >
        <Tab.Screen
          name="HomePage"
          component={Stack_Navigation_Home}
          options={{
            title: "",
            tabBarIcon: ({ focused }) => (
              <AntDesing_Icon
                name={"home"}
                size={40}
                color={focused ? paletOfColors.black : paletOfColors.darkGray}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Carrito"
          component={Carrito_Screen}
          options={{
            title: "",
            tabBarIcon: ({ focused }) => (
              <AntDesing_Icon
                name={"shoppingcart"}
                size={40}
                color={focused ? paletOfColors.black : paletOfColors.darkGray}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Usuarios"
          component={Users_Screen}
          options={{
            title: "",
            tabBarIcon: ({ focused }) => (
              <AntDesing_Icon
                name={"user"}
                size={40}
                color={focused ? paletOfColors.black : paletOfColors.darkGray}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
  tabBarStyle: {
    padding: 8,
    height: 60,
    borderTopWidth: 2,
    borderTopColor: paletOfColors.black,
  },
});
