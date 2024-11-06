import {
  ActivityIndicator,
  StyleSheet,
  FlatList,
  Dimensions,
} from "react-native";
import { Montserrat_Text, Card_Order } from "../components";
import { ScreenWrapper } from "../wrappers";
import { useGetOrdersQuery } from "../services/orders_Services";
import { paletOfColors } from "../utils/colors";

const { width } = Dimensions.get("screen");

export function Orders_Screen({ route }) {
  const { dateNow } = route.params;

  const { data: orders, error, isLoading } = useGetOrdersQuery(dateNow);

  return (
    <ScreenWrapper>
      {isLoading ? (
        <ActivityIndicator size={"large"} color={paletOfColors.black} />
      ) : error ? (
        <Montserrat_Text>Error !</Montserrat_Text>
      ) : (
        <FlatList
          style={styles.flatListOrders}
          data={orders}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => <Card_Order order={item} />}
          contentContainerStyle={styles.contianerChildrenFlat}
        />
      )}
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  flatListOrders: {
    width: width * 0.85,
  },
  contianerChildrenFlat: {
    gap: 15,
  },
  containerTicketsScreen: {
    flex: 1,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
