import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home_Screen, Product_Detail_Screen, Products_Filter_Screen } from "../screens";
import { StyleSheet } from "react-native";
import { paletOfColors } from "../utils/colors";
import { Icon_Dinamic, Pressable_Dinamic } from "../components";

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
          headerTintColor: "#FFF",
          headerTitleAlign:"center",
          headerRight: () => (
            <Pressable_Dinamic onPress={()=>alert("Button HELP")}>
              <Icon_Dinamic name={"help"} size={25} color={paletOfColors.white}/>
            </Pressable_Dinamic>
          )
        }}
        component={Home_Screen}
      />
      <Stack.Screen
        name="Products By Categories"
        options={({ route }) => ({
          title: route.params?.cat_name,
          headerTitleAlign:"center",
          headerTintColor: "#FFF",
          headerTitleStyle: styles.textHeaderStack,
          headerStyle: styles.containerHeaderStack,
          headerRight: () => (
            <Pressable_Dinamic onPress={()=>alert("Button HELP")}>
              <Icon_Dinamic name={"help"} size={25} color={paletOfColors.white}/>
            </Pressable_Dinamic>
          )
        })}
        component={Products_Filter_Screen}
      />
      <Stack.Screen
        name="Product Detail"
        options={({ route }) => ({
          title: route.params?.pro_name,
          headerTitleAlign:"center",
          headerTintColor: "#FFF",
          headerTitleStyle: styles.textHeaderStack,
          headerStyle: styles.containerHeaderStack,
          headerRight: () => (
            <Pressable_Dinamic onPress={()=>alert("Button HELP")}>
              <Icon_Dinamic name={"help"} size={25} color={paletOfColors.white}/>
            </Pressable_Dinamic>
          )
        })}
        component={Product_Detail_Screen}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  containerHeaderStack: {
    padding:2,
    backgroundColor: paletOfColors.black,
  },
  textHeaderStack: {
    fontSize: 24,
    color:paletOfColors.white
  },
});
