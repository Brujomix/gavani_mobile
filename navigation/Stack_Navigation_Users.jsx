import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login_Screen, Profile_Screen, Registration_Screen } from "../screens";
import { StyleSheet } from "react-native";
import { paletOfColors } from "../utils/colors";
import { useSelector } from "react-redux";
import { Pressable_Dinamic, Icon_Dinamic } from "../components";

const Stack = createNativeStackNavigator();

export function Stack_Navigation_Users() {

  const { userInfo } = useSelector((state) => state.User);

  console.info(`user Info desde Stack Users, ${userInfo}`);

  return (
    <>
      {userInfo ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Profile"
            options={{
              title: "Perfil",
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
            component={Login_Screen}
          />
          <Stack.Screen
            name="Registration"
            options={{
              title: "Crear Cuenta",
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
