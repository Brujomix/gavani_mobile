import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Home_Screen,
  Product_Detail_Screen,
  Products_Filter_Screen,
} from "../screens";
import { StyleSheet } from "react-native";
import { paletOfColors } from "../utils/colors";
import { Modal_Help } from "../components";

const Stack = createNativeStackNavigator();

export function Stack_Navigation_Home() {
  const textInfoHome =
    "En esta página encontrarás los productos que seleccionamos para ti, promociones y descuentos en productos más vendidos. También podrás navegar a nuestras categorias de productos y recorrerer el amplio listado de exquisiteces que tenemos para ofrecerte. ";
  const textInfoFilter = "Elavoramos nuestros productos con materia prima de excelente calidad."
    return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          title: "Gavani Rotiseria",
          headerTitleStyle: styles.textHeaderStack,
          headerStyle: styles.containerHeaderStack,
          headerTintColor: "#FFF",
          headerTitleAlign: "center",
          headerRight: () => (
            <Modal_Help title={"Página Principal"} textInfo={textInfoHome} />
          ),
        }}
        component={Home_Screen}
      />
      <Stack.Screen
        name="Products By Categories"
        options={({ route }) => ({
          title: route.params?.cat_name,
          headerTitleAlign: "center",
          headerTintColor: "#FFF",
          headerTitleStyle: styles.textHeaderStack,
          headerStyle: styles.containerHeaderStack,
          headerRight: () => <Modal_Help title={route.params?.cat_name} textInfo={textInfoFilter} />,
        })}
        component={Products_Filter_Screen}
      />
      <Stack.Screen
        name="Product Detail"
        options={({ route }) => ({
          title: route.params?.pro_name,
          headerTitleAlign: "center",
          headerTintColor: "#FFF",
          headerTitleStyle: styles.textHeaderStack,
          headerStyle: styles.containerHeaderStack,
        })}
        component={Product_Detail_Screen}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  containerHeaderStack: {
    padding: 2,
    backgroundColor: paletOfColors.black,
  },
  textHeaderStack: {
    fontSize: 24,
    color: paletOfColors.white,
  },
});
