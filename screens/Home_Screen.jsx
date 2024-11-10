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

const { width } = Dimensions.get("screen");

createTable_User()
  .then((res) => console.info("tabla user ok", res))
  .catch((error) => console.error("Error al Crear la Tabla User", error));

export function Home_Screen({ navigation }) {
  const { infoUser } = useSelector((state) => state.User);

  const { data: Categories, error, isLoading } = useGetCategoriesQuery();

  const dispatch = useDispatch();

  console.warn("InfoUser desde Home", infoUser);

  useEffect(() => {
    if (!infoUser) {
      (async () => {
        try {
          const users = await fetchUser();
          dispatch(
            setUser({
              isLogged: true,
              email: users.email,
              //imageProfile: user.imageProfile,
              id_Token: users.idToken,
              local_Id: users.localId,
            })
          );
          console.warn("Usuario resgistrados en DB", users);
        } catch (error) {
          console.info("No existen Usuarios en la Tabla", error);
        }
      })();
    }
  }, [infoUser]);

  return (
    <ScreenWrapper>
      <Montserrat_Text style={styles.titleFavoriteProducts}>
        Productos Seleccionados
      </Montserrat_Text>

      <View style={styles.containerCarousel}>
        <Carousel_Favorites_Products navigation={navigation} />
      </View>

      <Montserrat_Text style={styles.titleFavoriteProducts}>
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
    height: 210,
  },
  flatCategories: { width: width * 0.98 },
  footerListCategories: {
    marginBottom: 80,
  },
  titleFavoriteProducts: {
    marginVertical: 12,
    fontSize: 22,
    backgroundColor:paletOfColors.black,
    color:paletOfColors.white,
    alignSelf: "center",
    padding:12,
    borderRadius:12
  },
});
