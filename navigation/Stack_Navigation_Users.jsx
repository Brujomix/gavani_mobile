import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login_Screen, Profile_Screen, Registration_Screen } from "../screens";
import { StyleSheet } from "react-native";
import { paletOfColors } from "../utils/colors";
import { Modal_Help } from "../components";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

export function Stack_Navigation_Users() {
  const textInfoLogin =
    "En esta páginas podrás acceder con tus crendenciales para poder tener acceso total al carrito y la posibiladad de generar una orden. Recuerda que no estar logueado no permitirá que puedas generar tus ordenes de compra. En dicho dirigete a la sección de registro con el boton de Crear Cuenta";

  const textInfoPerfil = "texto Perfil de Usuario";

  const { userInfo } = useSelector((state) => state.User);

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
                <Modal_Help
                  title={"Perfil de Usuario"}
                  textInfo={textInfoPerfil}
                />
              ),
            }}
            component={Profile_Screen}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            options={{
              title: "Iniciar Session",
              headerTitleStyle: styles.textHeaderStack,
              headerStyle: styles.containerHeaderStack,
              headerTintColor: "#FFF",
              headerTitleAlign: "center",
              headerRight: () => (
                <Modal_Help
                  title={"Inicio de Sessión"}
                  textInfo={textInfoLogin}
                />
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
