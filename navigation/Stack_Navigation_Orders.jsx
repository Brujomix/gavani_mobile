import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Detail_Order_Screen, Orders_Screen} from "../screens";
import { StyleSheet } from "react-native";
import { paletOfColors } from "../utils/colors";
import { Pressable_Dinamic, Icon_Dinamic } from "../components";
import { formated_Date } from "../utils/formated_Date";

const Stack = createNativeStackNavigator();

export function Stack_Navigation_Orders() {
  return (
    <Stack.Navigator>
      <Stack.Screen
      initialParams={{ dateNow: formated_Date() }}
        name="Orders"
        options={{
          title: "Mis Ordenes",
          headerTitleStyle: styles.textHeaderStack,
          headerStyle: styles.containerHeaderStack,
          headerTintColor: "#FFF",
          headerTitleAlign: "center",
          headerRight: () => (
            <Pressable_Dinamic onPress={() => alert("Button HELP")}>
              <Icon_Dinamic
                name={"help"}
                size={25}
                color={paletOfColors.white}
              />
            </Pressable_Dinamic>
          ),
        }}
        component={Orders_Screen}
      />
      <Stack.Screen
        name="Detalle Orden"
        options={{
          title: "OrdersDetail",
          headerTitleStyle: styles.textHeaderStack,
          headerStyle: styles.containerHeaderStack,
          headerTintColor: "#FFF",
          headerTitleAlign: "center",
          headerRight: () => (
            <Pressable_Dinamic onPress={() => alert("Button HELP")}>
              <Icon_Dinamic
                name={"help"}
                size={25}
                color={paletOfColors.white}
              />
            </Pressable_Dinamic>
          ),
        }}
        component={Detail_Order_Screen}
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
    color: paletOfColors.white,
  },
});
