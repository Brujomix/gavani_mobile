import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Carrito_Screen, ScreenWrapper, Users_Screen } from "../screens";
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
        screenOptions={{
          tabBarStyle: styles.tabBarStyle,
          tabBarShowLabel: false,
          header: () => <Business_OnLine onLine={onLine} />,
        }}
      >
        <Tab.Screen
          name="HomePage"
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
        >
          {() => (
            <ScreenWrapper onLine={onLine}>
              <Stack_Navigation_Home />
            </ScreenWrapper>
          )}
        </Tab.Screen>

        <Tab.Screen
          name="Carrito"
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
        >
          {() => (
            <ScreenWrapper onLine={onLine}>
              <Carrito_Screen />
            </ScreenWrapper>
          )}
        </Tab.Screen>

        <Tab.Screen
          name="Usuarios"
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
        >
          {() => (
            <ScreenWrapper onLine={onLine}>
              <Users_Screen />
            </ScreenWrapper>
          )}
        </Tab.Screen>
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

