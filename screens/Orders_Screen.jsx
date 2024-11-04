import { ActivityIndicator, StyleSheet, FlatList } from "react-native";
import { Montserrat_Text, Card_Order } from "../components";
import { ScreenWrapper } from "../wrappers";
import { useGetOrdersQuery } from "../services/orders_Services";
import { paletOfColors } from "../utils/colors";

export function Orders_Screen() {
  const { data: orders, error, isLoading } = useGetOrdersQuery();
console.log(error);

  return (
    <ScreenWrapper>
      {isLoading ? (
        <ActivityIndicator size={"large"} color={paletOfColors.black} />
      ) : error ? (
        <Montserrat_Text>Error !</Montserrat_Text>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => <Card_Order order={item} />}
        />
      )}
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  containerTicketsScreen: {
    flex: 1,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
