import { StyleSheet, FlatList } from "react-native";
import {
  Montserrat_Text,
  Pressable_Dinamic,
  Card_Product_Cart,
  Table_Cart_Products,
} from "../components";
import { ScreenWrapper } from "../wrappers";
import { useSelector } from "react-redux";

export function Carrito_Screen() {

  const { cartProducts } = useSelector((state) => state.Cart);

  return (
    <ScreenWrapper>

        <Montserrat_Text style={styles.titleCart}>Carrito</Montserrat_Text>

      {/*     <FlatList
        data={cartProducts}
        keyExtractor={(item) => item.pro_iden}
        renderItem={({ item }) => <Card_Product_Cart product={item} />}
      /> */}

      <Table_Cart_Products productsCart={cartProducts}/>

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
