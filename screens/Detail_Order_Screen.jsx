import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import { ScreenWrapper } from "../wrappers";
import {
  useDeleteOrderMutation,
  useGetOrderByIdQuery,
} from "../services/orders_Services";
import {
  Card_Order_Detail,
  Modal_Dinamic,
  Montserrat_Text,
  Pressable_Dinamic,
} from "../components";
import { paletOfColors } from "../utils/colors";
import { ActivityLoadingStyle } from "../utils/globalStyles";
import { useEffect } from "react";
import { Total_Cart } from "../utils/funtions";

const { width } = Dimensions.get("screen");

export function Detail_Order_Screen({ route, navigation }) {
  const { order_iden } = route.params;

  const { data: orders, error, isLoading } = useGetOrderByIdQuery(order_iden);

  const [triggerDelete, result] = useDeleteOrderMutation();

  const handleCancelarOrder = (orderKey) => {
    triggerDelete(orderKey);
  };

  useEffect(() => {
    if (result.isSuccess) {
      navigation.navigate("Orders");
    }
  }, [result]);

  return (
    <ScreenWrapper>
      {isLoading ? (
        <ActivityIndicator
          style={ActivityLoadingStyle}
          size={90}
          color={paletOfColors.black}
        />
      ) : error ? (
        <Montserrat_Text>Error !</Montserrat_Text>
      ) : (
        <View style={styles.containerOrderDetail}>
          <FlatList
            data={orders[0].order_products}
            key={(item) => item.pro_iden}
            renderItem={({ item }) => <Card_Order_Detail order={item} />}
            contentContainerStyle={styles.containerChildrenProducts}
            ListHeaderComponent={
              <View style={styles.containerHeaderDetailOrders}>
                <Montserrat_Text style={styles.textDate}>
                  {orders[0].order_date}
                </Montserrat_Text>
                <Montserrat_Text style={styles.textDate}>
                  $ {Total_Cart(orders[0].order_products)}
                </Montserrat_Text>
              </View>
            }
            ListFooterComponent={
              <View style={styles.footerFlatOrderDetail}>
                <Modal_Dinamic textButton={"Cancelar Orden"}>
                  <View style={styles.containerBodyModalCart}>
                    <Montserrat_Text style={styles.textBodyModalCart}>
                      Cancelar Orden?
                    </Montserrat_Text>
                    <Pressable_Dinamic
                      style={styles.pressableConfirmar}
                      onPress={() =>
                        handleCancelarOrder(orders[0].order_key_firebase)
                      }
                    >
                      <Montserrat_Text style={styles.textConfirButton}>
                        Cancelar
                      </Montserrat_Text>
                    </Pressable_Dinamic>
                  </View>
                </Modal_Dinamic>
              </View>
            }
          />
        </View>
      )}
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  containerOrderDetail: {
    width: width * 0.9,
    marginTop: 20,
  },

  containerHeaderDetailOrders:{
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  flatOrderProducts: {
    width: width,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 2,
    padding: 8,
  },

  containerChildrenProducts: {
    gap: 10,
    borderColor: paletOfColors.darkGray,
  },

  footerFlatOrderDetail: {
    marginBottom: 10,
  },

  pressableConfirmar: {
    width: width * 0.5,
    marginTop: 20,
    borderWidth: 1,
    borderColor: paletOfColors.black,
    padding: 2,
    backgroundColor: paletOfColors.lightGray,
  },

  textDate: {
    fontSize: 28,
    alignSelf: "center",
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
