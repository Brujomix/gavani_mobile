import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { Card_Category, Montserrat_Text } from "../components";
import { Carousel_Favorites_Products } from "../components/Carousel_Favorites_Products";
import { ScreenWrapper } from "../wrappers";
import { useGetCategoriesQuery } from "../services/app_Service";
import { paletOfColors } from "../utils/colors";

const { width } = Dimensions.get("screen");

export function Home_Screen({ navigation }) {

  const { data: Categories, error, isLoading } = useGetCategoriesQuery();
 
  return (
    <ScreenWrapper>
      <Montserrat_Text style={styles.titleText}>
        Productos Seleccionados
      </Montserrat_Text>

      <View style={styles.containerCarousel}>
        <Carousel_Favorites_Products navigation={navigation}/>
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
          style={styles.flatCategories}
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
        />
      )}
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  containerCarousel: {
    height: 250,
  },
  flatCategories: { width: width * 0.98 },
  footerListCategories: {
    marginBottom: 80,
  },
  titleText: {
    marginVertical: 10,
    fontSize: 25,
    alignSelf: "center",
  },
});
