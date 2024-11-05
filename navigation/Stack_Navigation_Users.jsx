import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login_Screen, Profile_Screen, Registration_Screen } from "../screens";
import { StyleSheet } from "react-native";
import { paletOfColors } from "../utils/colors";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

export function Stack_Navigation_Users() {
  const { isLogged } = useSelector((state) => state.User);
  return (
    <>
      {isLogged ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Perfil"
            options={{
              title: "Perfil",
              headerTitleStyle: styles.textHeaderStack,
              headerStyle: styles.containerHeaderStack,
            }}
            component={Profile_Screen}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName={"Login"}>
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
      )}
    </>
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
