import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Carrito_Screen, Orders_Screen } from "../screens";
import { Stack_Navigation_Home } from "./Stack_Navigation_Home";
import { AntDesing_Icon,Material_Icon, Business_OnLine } from "../components";
import { paletOfColors } from "../utils/colors";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { TotalProductCart } from "../utils/funtions";
import { Stack_Navigation_Users } from "./Stack_Navigation_Users";

const Tab = createBottomTabNavigator();

export function Tab_Navigation() {

  const {cartProducts} = useSelector(state=>state.Cart)

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomePage"
        screenOptions={{
          tabBarStyle: styles.tabBarStyle,
          header: () => <Business_OnLine />,
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
            tabBarBadge: TotalProductCart(cartProducts),
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
          name="Orders"
          component={Orders_Screen}
          options={{
            title: "",
            tabBarBadge: 0,
            tabBarIcon: ({ focused }) => (
              <Material_Icon
                name={"receipt-long"}
                size={40}
                color={focused ? paletOfColors.black : paletOfColors.darkGray}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Usuarios"
          component={Stack_Navigation_Users}
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
