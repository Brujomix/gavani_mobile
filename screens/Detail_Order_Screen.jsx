import { ActivityIndicator, Dimensions, StyleSheet } from "react-native";
import { ScreenWrapper } from "../wrappers";
import { useGetOrderByIdQuery } from "../services/orders_Services";
import { Card_Order_Detail, Montserrat_Text } from "../components";
import { paletOfColors } from "../utils/colors";

const {width} = Dimensions.get("screen")

export function Detail_Order_Screen({route}) {

  const {order_iden} = route.params

  const {data: order, error, isLoading} = useGetOrderByIdQuery(order_iden)
  
  console.info("Order Detail", order_iden)

  return (
    <ScreenWrapper>
      {isLoading ? (
        <ActivityIndicator size={"large"} color={paletOfColors.black} />
      ) : error ? (
        <Montserrat_Text>Error !</Montserrat_Text>
      ) : (
        <>
         <Card_Order_Detail order={order[0]}/>
        </>
      )}
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  containerOrderScreen: {
    width: width * .8,
    gap: 20,
  },
});
