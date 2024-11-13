import {
  ActivityIndicator,
  StyleSheet,
  FlatList,
  Dimensions,
} from "react-native";
import { Montserrat_Text, Card_Order, Pressable_Dinamic } from "../components";
import { ScreenWrapper } from "../wrappers";
import { useGetOrdersQuery } from "../services/orders_Services";
import { paletOfColors } from "../utils/colors";
import { ActivityLoadingStyle } from "../utils/globalStyles";

const { width } = Dimensions.get("screen");

export function Orders_Screen({ route, navigation }) {
  
  const { dateNow } = route.params;

  const { data: orders, error, isLoading } = useGetOrdersQuery(dateNow);

  return (
    <ScreenWrapper>
      {isLoading ? (
        <ActivityIndicator style={ActivityLoadingStyle} size={90} color={paletOfColors.black} />
      ) : error ? (
        <Montserrat_Text>Error !</Montserrat_Text>
      ) : (
        <>
          {orders?.length === 0 ? (
            <>
              <Montserrat_Text style={styles.textWithoutOrders}>
                No se han registrado Ordenes
              </Montserrat_Text>
              <Pressable_Dinamic
                style={styles.pressableSeeProducts}
                onPress={() => navigation.navigate("Stack Home")}
              >
                <Montserrat_Text style={styles.textSeeProducts}>
                  Ver Productos
                </Montserrat_Text>
              </Pressable_Dinamic>
            </>
          ) : (
            <FlatList
              style={styles.flatListOrders}
              data={orders}
              keyExtractor={(item) => item.order_iden}
              renderItem={({ item }) => <Card_Order navigation={navigation} order={item} />}
              contentContainerStyle={styles.contianerChildrenFlat}
            />
          )}
        </>
      )}
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  flatListOrders: {
    width: width * 0.98,
  },
  contianerChildrenFlat: {
    gap: 15,
  },

  textWithoutOrders: {
    alignSelf: "center",
    marginVertical: 35,
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  textSeeProducts: {
    fontSize: 18,
    alignSelf: "center",
  },
  pressableSeeProducts: {
    width: width * 0.5,
    marginTop: 20,
    borderWidth: 1,
    borderColor: paletOfColors.black,
    padding: 2,
    backgroundColor: paletOfColors.lightGray,
  },
});
