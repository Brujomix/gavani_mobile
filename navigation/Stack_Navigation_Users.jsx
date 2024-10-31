import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login_Screen, Registration_Screen } from "../screens";
import { StyleSheet } from "react-native";
import { paletOfColors } from "../utils/colors";
const Stack = createNativeStackNavigator();

export function Stack_Navigation_Users() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{
          title: "Iniciar Session",
          headerTitleStyle: styles.textHeaderStack,
          headerStyle: styles.containerHeaderStack,
        }}
        component={Login_Screen}
      />
      <Stack.Screen
        name="Registration"
        options={{
            title: "Crear Cuenta",
            headerTitleStyle: styles.textHeaderStack,
            headerStyle: styles.containerHeaderStack,
          }}
        component={Registration_Screen}
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
