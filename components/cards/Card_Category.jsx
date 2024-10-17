import { View, StyleSheet, Pressable } from "react-native";
import { paletOfColors } from "../../utils/colors";
import { Image_Dianamic, Montserrat_Text } from "../../components";

export function Card_Category({ category, index, navigation }) {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Lista Productos", {
          cat_iden: category.cat_iden,
          cat_name: category.cat_name,
        })
      }
    >
      <View
        style={
          index % 2 === 0
            ? styles.containerChildrenRow
            : styles.containerChildrenRow_Reverse
        }
      >
        <Image_Dianamic
          uriURL={category.cat_url_image}
          altProp={`imagen de la categoria ${category.cat_name}`}
        />
        <Montserrat_Text
          style={index % 2 === 0 ? styles.textStyleGrey : styles.textStyleBlack}
        >
          {category.cat_name}
        </Montserrat_Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  containerChildrenRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: paletOfColors.white,
    borderWidth: 4,
    borderRadius:10,
    borderColor: paletOfColors.darkGray,
  },
  containerChildrenRow_Reverse: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: paletOfColors.white,
    borderWidth: 4,
    borderRadius:10,
    borderColor: paletOfColors.darkGray,
  },
  textStyleGrey: {
    fontSize: 28,
    color: paletOfColors.black,
    letterSpacing: 2,
  },
  textStyleBlack: {
    fontSize: 28,
    color: paletOfColors.black,
    letterSpacing: 2,
  },
});
