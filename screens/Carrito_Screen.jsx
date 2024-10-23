import { StyleSheet, FlatList, View } from "react-native";
import {
  Montserrat_Text,
  Card_Product_Cart,
  Modal_Dinamic,
  Pressable_Dinamic,
} from "../components";
import { ScreenWrapper } from "../wrappers";
import { useSelector } from "react-redux";
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

      <Modal_Dinamic disabled={cartProducts.length === 0 ? true : false} textButton={isOnLine ? "Confirmar" : "Fuera de Línea"}>
        <View style={styles.containerBodyModalCart}>
          <Montserrat_Text style={styles.textBodyModalCart}>
            Confirmar Pedido ?
          </Montserrat_Text>
          <Pressable_Dinamic style={styles.confirmPressable} onPress={()=> console.log("Confirm Order")
          }>
            <Montserrat_Text style={styles.textConfirButton}>Confirmar</Montserrat_Text>
          </Pressable_Dinamic>
        </View>
      </Modal_Dinamic>
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
  containerButtonsModal: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  containerBodyModalCart: {
    gap: 40,
  },
  textWithoutProducts: {
    alignSelf: "center",
    marginVertical: 35,
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  textTotalCart: {
    marginBottom: 45,
    fontSize: 30,
  },
  textBodyModalCart: {
    alignSelf: "center",
    fontSize: 30,
  },
  confirmPressable:{
    width: "90%"
  },
  textConfirButton:{
    alignSelf:"center",
    fontSize:25,
  }
});
