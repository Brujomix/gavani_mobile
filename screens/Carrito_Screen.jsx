import { StyleSheet, FlatList, View } from "react-native";
import {
  Montserrat_Text,
  Card_Product_Cart,
  Modal_Dinamic,
  Pressable_Dinamic,
} from "../components";
import { ScreenWrapper } from "../wrappers";
import { useDispatch, useSelector } from "react-redux";
import { Total_Cart } from "../utils/funtions";
import { clearCart } from "../redux/slices/carritoSlice";
import { usePostOrderMutation } from "../services/orders_Services";
import { formated_Date } from "../utils/formated_Date";

export function Carrito_Screen({ navigation }) {
  const { cartProducts } = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  const { isOnLine } = useSelector((state) => state.Global);
  const { isLogged } = useSelector((state) => state.User);
  const [triggerPost, result] = usePostOrderMutation();
  console.log(result);

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

      <Modal_Dinamic
        disabled={cartProducts.length === 0 ? true : false}
        textButton={isOnLine ? "Confirmar" : "Fuera de Línea"}
      >
        <View style={styles.containerBodyModalCart}>
          <Montserrat_Text style={styles.textBodyModalCart}>
            Confirmar Pedido ?
          </Montserrat_Text>
          <Pressable_Dinamic
            onPress={() => {
              if (isLogged) {
                triggerPost({
                  order_date: formated_Date(),
                  order_products: cartProducts,
                  order_total: Total_Cart(cartProducts),
                });
                navigation.navigate("Orders");
                dispatch(clearCart());
              } else {
                navigation.navigate("Usuarios");
              }
            }}
          >
            <Montserrat_Text style={styles.textConfirButton}>
              Confirmar
            </Montserrat_Text>
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
    fontSize: 28,
  },

  textConfirButton: {
    alignSelf: "center",
    fontSize: 18,
  },
});
