import { View, StyleSheet, Pressable, Dimensions } from "react-native";
import { paletOfColors } from "../../utils/colors";
import { Image_Dianamic, Montserrat_Text } from "../../components";

const { width, height } = Dimensions.get("screen");

export function Card_Category({ category, index, navigation }) {
  return (
    <View style={styles.containerBoxShadow}>
      <Pressable
        style={styles.pressableCategory}
        onPress={() => {
          navigation.navigate("Products By Categories", {
            cat_iden: category.cat_iden,
            cat_name: category.cat_name,
          });
        }}
      >
        <View
          style={
            index % 2 === 0
              ? styles.containerChildrenRow
              : styles.containerChildrenRow_Reverse
          }
        >
          <View style={styles.containerImageCategory}>
            <Image_Dianamic
              styleImage={styles.styleImage}
              uriURL={category.cat_url_image}
              altProp={`imagen de la categoria ${category.cat_name}`}
            />
          </View>

          <Montserrat_Text style={styles.nameCategory}>
            {category.cat_name}
          </Montserrat_Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBoxShadow: { borderBottomWidth: 3 },

  containerChildrenRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  containerChildrenRow_Reverse: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    alignItems: "center",
  },

  containerCategoryName: {
    fontSize: 30,
    backgroundColor: paletOfColors.whiteTransparent,
    padding: 10,
    color: paletOfColors.black,
    marginBottom: 5,
    borderRadius: 15,
  },

  containerImageCategory: {
    width: width * 0.8,
    height: height * 0.07,
  },

  styleImage: { width: "100%", height: "100%", objectFit: "cover" },

  pressableCategory: { marginVertical: 10, padding: 5 },

  nameCategory: {
    fontSize: 28,
    color: paletOfColors.black,
    letterSpacing: 2,
    position: "relative",
    right: 40,
    backgroundColor: paletOfColors.whiteTransparent,
    borderRadius: 15,
    padding: 10,
  },
});
