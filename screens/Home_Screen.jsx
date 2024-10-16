import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Card_Category, Card_Product, Montserrat_Text } from "../components";
import { paletOfColors } from "../utils/colors";

import { products, categories } from "../dataTest.json";

export function Home_Screen({ navigation }) {
  const [favoritesProducts, setFavoritesProducts] = useState([]);

  useEffect(() => {
    const productsFavorites = products.filter((e) => e.pro_top === true);
    setFavoritesProducts(productsFavorites);
  }, [products]);

  return (
    <View style={styles.containerPrincipal}>
      <Montserrat_Text style={styles.titleText}>
        Productos Seleccionados
      </Montserrat_Text>
      <FlatList
        horizontal
        data={favoritesProducts}
        keyExtractor={(item) => item.pro_iden}
        renderItem={({ item }) => <Card_Product product={item} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerFavoritesProducts}
      />
      <Montserrat_Text style={styles.titleText}>
        Nuestras Categorias
      </Montserrat_Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.cat_iden}
        renderItem={({ item, index }) => (
          <Card_Category
            category={item}
            index={index}
            navigation={navigation}
          />
        )}
        contentContainerStyle={styles.containerCategories}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: paletOfColors.white,
  },
  containerFavoritesProducts: { marginHorizontal: 10, gap: 10 },
  titleText: {
    fontSize: 25,

    alignSelf: "center",
  },
});
