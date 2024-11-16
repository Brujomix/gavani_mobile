import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login_Screen, Profile_Screen, Registration_Screen } from "../screens";
import { StyleSheet } from "react-native";
import { paletOfColors } from "../utils/colors";
import { useSelector } from "react-redux";
import { Pressable_Dinamic, Icon_Dinamic, Modal_Help } from "../components";

const Stack = createNativeStackNavigator();

export function Stack_Navigation_Users() {

  const { userInfo } = useSelector((state) => state.User);

  console.info(`user Info desde Stack Users, ${userInfo}`);

  const textInfoLogin = "En esta páginas podrás acceder con tus crendenciales para poder tener acceso total al carrito y la posibiladad de generar una orden. Recuerda que no estar logueado no permitirá que puedas generar tus ordenes de compra. En dicho dirigete a la sección de registro con el boton de Crear Cuenta"

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
                <Modal_Help title={"Inicio de Sessión"} textInfo={textInfoLogin}/>
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
