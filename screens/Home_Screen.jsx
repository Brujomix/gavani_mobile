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
import { useDispatch, useSelector } from "react-redux";
import { createTable_User } from "../db/createTable";
import { useEffect } from "react";
import { fetchUser } from "../db/crudUsers";
import { setUser } from "../redux/slices/usersSlice";
import { ActivityLoadingStyle } from "../utils/globalStyles";
import { ScrollView } from "react-native";

const { width } = Dimensions.get("screen");

createTable_User()
  .then((res) => console.info("Tabla User Creada", res))
  .catch((error) => console.error("Error al Crear la Tabla User", error));

export function Home_Screen({ navigation }) {
  const { userInfo } = useSelector((state) => state.User);

  const { data: Categories, error, isLoading } = useGetCategoriesQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo) {
      (async () => {
        try {
          const resp = await fetchUser();
          if (resp.rows._array?.length !== 0) {
            const { email, local_Id, imageProfile } = resp.rows._array[0];

            dispatch(
              setUser({
                email: email,
                imageProfile: imageProfile,
                local_Id: local_Id,
              })
            );
          } else {
            dispatch(setUser(null));
          }
          console.info(
            `Usuarios en base de datos Home`,
            resp.rows._array.length
          );
        } catch (error) {
          console.info(`Error Al Obtener Usuarios DB Home`, error);
        }
      })();
    }
  }, [userInfo]);

  return (
    <ScreenWrapper>
      <ScrollView>
        <Montserrat_Text style={styles.titleFavoriteProducts}>
          Productos Seleccionados
        </Montserrat_Text>

        <View style={styles.containerCarousel}>
          <Carousel_Favorites_Products navigation={navigation} />
        </View>

        <Montserrat_Text style={styles.titleFavoriteProducts}>
          Nuestras Categorias
        </Montserrat_Text>

        {isLoading ? (
          <ActivityIndicator
            style={ActivityLoadingStyle}
            size={90}
            color={paletOfColors.black}
          />
        ) : error ? (
          <Montserrat_Text>Error !</Montserrat_Text>
        ) : (
          <View>
            {Categories.map((e, index) => (
              <Card_Category
                key={e.cat_iden}
                category={e}
                index={index}
                navigation={navigation}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  containerCarousel: {
    height: 210,
  },
  flatCategories: { width: width * 0.98 },
  footerListCategories: {
    marginBottom: 80,
  },
  titleFavoriteProducts: {
    marginVertical: 12,
    fontSize: 22,
    backgroundColor: paletOfColors.black,
    color: paletOfColors.white,
    alignSelf: "center",
    padding: 12,
    borderRadius: 12,
  },
});
