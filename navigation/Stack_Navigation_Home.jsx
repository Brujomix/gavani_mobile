import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home_Screen, Products_Filter_Screen } from "../screens";
import { StyleSheet } from "react-native";
import { paletOfColors } from "../utils/colors";
const Stack = createNativeStackNavigator();

export function Stack_Navigation_Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          title: "Gavani Rotiseria",
          headerTitleStyle: styles.textHeaderStack,
          headerStyle: styles.containerHeaderStack,
        }}
        component={Home_Screen}
      />
      <Stack.Screen
        name="Products By Categories"
        options={({ route }) => ({
          title: route.params?.cat_name,
          headerTitleStyle: styles.textHeaderStack,
          headerStyle: styles.containerHeaderStack,
        })}
        component={Products_Filter_Screen}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  containerHeaderStack: {
    backgroundColor: paletOfColors.black,
  },
  textHeaderStack: {
    fontSize: 24,
    color:paletOfColors.white
  },
});
