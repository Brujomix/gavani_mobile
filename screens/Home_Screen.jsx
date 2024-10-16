import { View, StyleSheet, FlatList } from "react-native";
import { Card_Category, Montserrat_Text } from "../components";
import { paletOfColors } from "../utils/colors";

import { categories } from "../dataTest.json";
import { Carousel_Favorites_Products } from "../components/Carousel_Favorites_Products";

export function Home_Screen({ navigation, route }) {
  const { pro_top } = route.params;

  return (
    <View style={styles.containerPrincipal}>
      <Montserrat_Text style={styles.titleText}>
        Productos Seleccionados
      </Montserrat_Text>

      <Carousel_Favorites_Products pro_top={pro_top} />

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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {},

  titleText: {
    marginVertical: 10,
    fontSize: 32,
    alignSelf: "center",
  },
});
