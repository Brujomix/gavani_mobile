import { StyleSheet, FlatList, View } from "react-native";
import {
  Montserrat_Text,
  Pressable_Dinamic,
  Card_Product_Cart,
} from "../components";
import { ScreenWrapper } from "../wrappers";
import { useSelector } from "react-redux";
import { paletOfColors } from "../utils/colors";
import { Total_Cart } from "../utils/funtions";

export function Carrito_Screen() {

  const { cartProducts } = useSelector((state) => state.Cart);
  const { isOnLine } = useSelector((state) => state.Global);

  return (
    <ScreenWrapper>
      <Montserrat_Text style={styles.titleCart}>Carrito</Montserrat_Text>
     
        {cartProducts.length === 0 ? (
          <Montserrat_Text style={styles.textWithoutProducts}>
            Sin Productos En Carrito
          </Montserrat_Text>
        ) : (
          <FlatList
            data={cartProducts}
            keyExtractor={(item) => item.pro_iden}
            renderItem={({ item }) => <Card_Product_Cart product={item} />}
          />
        )}
     

      <View style={styles.containerTotalCart}>
        <Montserrat_Text style={styles.textTotalCart}>
          Total Carrito:{" "}
        </Montserrat_Text>
        <Montserrat_Text style={styles.textTotalCart}>
          $ {Total_Cart(cartProducts)}
        </Montserrat_Text>
      </View>

      <Pressable_Dinamic disabled={!isOnLine} onPress={() => console.log("Confirmar Pedido")}>
        <Montserrat_Text style={styles.textConfirm}>{isOnLine ? "Confirmar" : "Fuera de Linea"}</Montserrat_Text>
      </Pressable_Dinamic>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  titleCart: {
    alignSelf: "center",
    fontSize: 35,
  },
  containerTotalCart: {
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  textWithoutProducts: {
    alignSelf:"center",
    marginVertical:35,
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  textTotalCart: {
    marginBottom:45,
    fontSize: 30,
  },
  pressableConfirm:{
    backgroundColor: paletOfColors.red
  },
  textConfirm: {
    fontSize: 35,
    alignSelf: "center",
  },
});
