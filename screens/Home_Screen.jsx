import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { Card_Category, Montserrat_Text } from "../components";
import { Carousel_Favorites_Products } from "../components/Carousel_Favorites_Products";
import { ScreenWrapper } from "../wrappers";
import { useGetCategoriesQuery } from "../services/app_Service";
import { paletOfColors } from "../utils/colors";

export function Home_Screen({ navigation }) {

  const { data: Categories, error, isLoading } = useGetCategoriesQuery();

  return (
    <ScreenWrapper>
      <View style={styles.continerHomeScreen}>
        <Montserrat_Text style={styles.titleText}>
          Productos Seleccionados
        </Montserrat_Text>

        <View style={styles.containerCarousel}>
          <Carousel_Favorites_Products />
        </View>

        <Montserrat_Text style={styles.titleText}>
          Nuestras Categorias
        </Montserrat_Text>

        {/* Loading FlatList Categories */}
        {isLoading ? (
          <ActivityIndicator size={"large"} color={paletOfColors.black} />
        ) : error ? (
          <Montserrat_Text>Error !</Montserrat_Text>
        ) : (
          <FlatList
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
        )}
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
  footerListCategories: {
    marginBottom: 80,
  },
  titleText: {
    marginVertical: 10,
    fontSize: 25,
    alignSelf: "center",
  },
});
