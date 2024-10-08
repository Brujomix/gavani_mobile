import { FlatList, StyleSheet, View } from "react-native";
import { Card_Product } from "../components";
import { useEffect, useState } from "react";

export function Carroucel_Products({products}) {
  
 const [favoritesProducts, setFavoritesProducts] = useState([])

 useEffect(()=>{
  setFavoritesProducts(products.filter(e=>e.pro_top === true))
 },[products])

  return (
    <View style={styles.containerCrroucel}>

        <FlatList
          horizontal
          data={favoritesProducts}
          keyExtractor={(item) => item.pro_iden}
          renderItem={({ item }) => <Card_Product product={item} />} 
          showsHorizontalScrollIndicator={false}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  containerCrroucel: {
    felx: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerChildren: {
    flexGrow: 1,
  },
});
