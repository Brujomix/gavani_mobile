import { StyleSheet, FlatList, View, Dimensions } from "react-native";
import {
  Montserrat_Text,
  Card_Product_Cart,
  Modal_Dinamic,
  Pressable_Dinamic,
  Icon_Dinamic,
} from "../components";
import { ScreenWrapper } from "../wrappers";
import { useDispatch, useSelector } from "react-redux";
import { Total_Cart } from "../utils/funtions";
import { clearCart } from "../redux/slices/carritoSlice";
import { usePostOrderMutation } from "../services/orders_Services";
import { formated_Date } from "../utils/formated_Date";
import { paletOfColors } from "../utils/colors";
import { generarId } from "../utils/generarId";
import { useEffect } from "react";

const { width, height } = Dimensions.get("screen");

export function Carrito_Screen({ navigation }) {
  
  const { cartProducts } = useSelector((state) => state.Cart);

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.User);

  const [triggerPost, result] = usePostOrderMutation();

  const handleConfirmOrder = () => {
    triggerPost({
      order_iden: generarId(),
      order_date: formated_Date(),
      order_products: cartProducts,
      order_total: Total_Cart(cartProducts),
    });
  };

  useEffect(() => {
    if (result.isSuccess) {
      navigation.navigate("Stack Orders");
      dispatch(clearCart());
    }
  }, [result]);
  
  return (
    <ScreenWrapper>
      <Montserrat_Text style={styles.titleCart}>Carrito</Montserrat_Text>

      {cartProducts?.length === 0 ? (
        <View>
          <Icon_Dinamic name={"shopping-cart-checkout"} size={300} color={paletOfColors.darkGray}/>
        <Montserrat_Text style={styles.textWithoutProducts}>
          Sin Productos En Carrito
        </Montserrat_Text>

        </View>
      ) : (
        <View style={{ width: width * 0.98, height: height * 0.6 }}>
          <FlatList
            style={styles.flatListCartProducts}
            data={cartProducts}
            keyExtractor={(item) => item.pro_iden}
            renderItem={({ item }) => <Card_Product_Cart product={item} />}
            contentContainerStyle={styles.containerChildrenCarProducts}
          />
          <View style={styles.containerTotalCart}>
            <Montserrat_Text style={styles.textTotalCart}>
              Precio Final
            </Montserrat_Text>
            <Montserrat_Text style={styles.textTotalCart}>
              $ {Total_Cart(cartProducts)}
            </Montserrat_Text>
          </View>
        </View>
      )}
      {userInfo ? (
        <View>
          {cartProducts?.length === 0 ? (
            <Pressable_Dinamic
              style={styles.pressableConfirmar}
              onPress={() => navigation.navigate("Stack Home")}
            >
              <Montserrat_Text style={styles.textConfirButton}>
                Ver Productos
              </Montserrat_Text>
            </Pressable_Dinamic>
          ) : (
            <Modal_Dinamic textButton={"Confirmar"}>
              <View style={styles.containerBodyModalCart}>
                <Montserrat_Text style={styles.textBodyModalCart}>
                  Confirmar Pedido ?
                </Montserrat_Text>
                <Pressable_Dinamic
                  disabled={cartProducts?.length === 0}
                  style={styles.pressableConfirmar}
                  onPress={() => handleConfirmOrder()}
                >
                  <Montserrat_Text style={styles.textConfirButton}>
                    Confirmar
                  </Montserrat_Text>
                </Pressable_Dinamic>
              </View>
            </Modal_Dinamic>
          )}
        </View>
      ) : (
        <Pressable_Dinamic
          style={styles.pressableConfirmar}
          onPress={() => navigation.navigate("Stack Users")}
        >
          <Montserrat_Text style={styles.textConfirButton}>
            Iniciar Session
          </Montserrat_Text>
        </Pressable_Dinamic>
      )}
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  titleCart: {
    marginTop: 20,
    alignSelf: "center",
    fontSize: 35,
  },

  flatListCartProducts: { marginTop: 20 },
  containerChildrenCarProducts: { gap: 8 },

  containerTotalCart: {
    width: width,
    flexDirection: "row",
    justifyContent: "space-evenly",
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
  pressableConfirmar: {
    width: width * 0.5,
    marginTop: 20,
    borderWidth: 1,
    borderColor: paletOfColors.black,
    padding: 2,
    backgroundColor: paletOfColors.lightGray,
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
