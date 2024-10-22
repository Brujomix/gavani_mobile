import { View, StyleSheet, FlatList } from "react-native";
import { Card_Category, Montserrat_Text } from "../components";

import { Carousel_Favorites_Products } from "../components/Carousel_Favorites_Products";
import { ScreenWrapper } from "../wrappers";
import { useSelector } from "react-redux";

export function Home_Screen({ navigation, route }) {

  const { pro_top } = route.params;

  const {Categories} = useSelector(state=>state.Global)

  return (
    <ScreenWrapper>
      <View style={styles.continerHomeScreen}>
        <Montserrat_Text style={styles.titleText}>
          Productos Seleccionados
        </Montserrat_Text>

        <View style={styles.containerCarousel}>
          <Carousel_Favorites_Products pro_top={pro_top} />
        </View>

        <FlatList
          ListHeaderComponent={
            <Montserrat_Text style={styles.titleText}>
              Nuestras Categorias
            </Montserrat_Text>
          }
          ListFooterComponent={
            <View style={styles.footerListCategories}></View>
          }
          data={Categories}
          keyExtractor={(item) => item.cat_iden}
          renderItem={({ item, index }) => (
            <Card_Category
              category={item}
              index={index}
              navigation={navigation}
            />
          )}
          contentContainerStyle={styles.containerFlatCategories}
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  continerHomeScreen: {
    flex: 1,
  },
  containerCarousel: {
    height: 260,
    marginTop: 10,
  },
  containerFlatCategories: {
    gap: 10,
  },
  footerListCategories: {
    marginBottom: 80,
  },
  titleText: {
    marginVertical: 10,
    fontSize: 32,
    alignSelf: "center",
  },
});
