import { StyleSheet, View } from "react-native";
import React from "react";
import { Montserrat_Text } from "../ui/Montserrat_Text";
import { Pressable_Dinamic } from "../ui/Pressable_Dinamic";

export function Card_Product_Cart({ product }) {
  return (
    <View style={styles.containerCardProductCart}>
      <Montserrat_Text>{product.pro_name}</Montserrat_Text>
      <Montserrat_Text>{product.pro_precio}</Montserrat_Text>
      <Montserrat_Text>{product.Cantidad}</Montserrat_Text>
      <Pressable_Dinamic onPress={console.log("remove")}>
        <Montserrat_Text>X</Montserrat_Text>
      </Pressable_Dinamic>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCardProductCart:{
    flexDirection: "row",
    
  }
})
