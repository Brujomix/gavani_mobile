import { StyleSheet, View } from "react-native";
import {
  Montserrat_Text,
  Pressable_Dinamic,
  Card_Product_Cart,
} from "../components";
import { ScreenWrapper } from "../wrappers";
import { FlatList } from "react-native-gesture-handler";

export function Carrito_Screen({ cartProducts }) {
  return (
    <ScreenWrapper>
      <Montserrat_Text style={styles.titleCart}>Carrito</Montserrat_Text>
      {cartProducts ? (
        <FlatList
          data={[]}
          keyExtractor={(item) => item.pro_iden}
          renderItem={({ item }) => <Card_Product_Cart product={item} />}
        />
      ) : (
        <Montserrat_Text>Agrega Productos Al Carrito</Montserrat_Text>
      )}

      <Pressable_Dinamic onPress={() => console.log("Confirmar Pedido")}>
        <Montserrat_Text>Confirmar</Montserrat_Text>
      </Pressable_Dinamic>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  titleCart: {
    alignSelf: "center",
    fontSize: 35,
  },
});
