import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Detail_Order_Screen, Orders_Screen } from "../screens";
import { StyleSheet } from "react-native";
import { paletOfColors } from "../utils/colors";
import { Modal_Help } from "../components";
import { formated_Date } from "../utils/formated_Date";

const Stack = createNativeStackNavigator();

export function Stack_Navigation_Orders() {
  const textInfoOrders =
    "En esta página encontraras las ordenes generadas en el día de hoy. Podrás navegar a ver su detalla y cancelar la orden si haz cambiado de parecer. Recuerda que tienes un timepo limitado para cancelar tus pedidos que corresponde a un tiempo aproximado de 15min. En caso de excederse ese tiempo deberás recibir la orden generada de manera obligatoria.";
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
            <Modal_Help title={"Mis Ordenes"} textInfo={textInfoOrders} />
          ),
        }}
        component={Orders_Screen}
      />
      <Stack.Screen
        name="Detail Order"
        options={{
          title: "Detalle Orden",
          headerTitleStyle: styles.textHeaderStack,
          headerStyle: styles.containerHeaderStack,
          headerTintColor: "#FFF",
          headerTitleAlign: "center",
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
