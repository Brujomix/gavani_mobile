import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { Card_Product } from "./cards/Card_Product";

import { products } from "../dataTest.json";

export function Carroucel_Products({ arr }) {
  return (
    <View style={styles.containerCrroucel}>
      <ScrollView style={styles.containerChildren}>
        <FlatList
          horizontal
          data={products}
          keyExtractor={(item) => item.pro_iden}
          renderItem={({ item }) => <Card_Product product={item} />}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCrroucel: {
    width: "100%",
    overflow:"hidden",
    height: 220,
    backgroundColor: "#FFF",
    margin: 10,
  },
  containerChildren: {
    margin: 15,
    backgroundColor: "#FFF",
  },
});
