import { Dimensions, StyleSheet, View } from "react-native";
import { ScreenWrapper } from "../wrappers";

const {width} = Dimensions.get("screen")

export function Detail_Order_Screen({ navigation }) {
  
  return (
    <ScreenWrapper>
      <View style={styles.containerOrderScreen}>
        Detail ORDER
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  containerOrderScreen: {
    width: width * .8,
    gap: 20,
  },
});
