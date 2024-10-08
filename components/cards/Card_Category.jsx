import { View, StyleSheet, Pressable } from "react-native";
import { paletOfColors } from "../../utils/colors";
import { Image_Dianamic, Edu_Text } from "../../components";

export function Card_Category({ category, index }) {

  return (
    <Pressable
      style={styles.pressableStyle}
      onPress={() => console.log(`Press on Category ${category.cat_iden}`)
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
        <Edu_Text
          style={index % 2 === 0 ? styles.textStyleGrey : styles.textStyleBlack}
        >
          {category.cat_name}
        </Edu_Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressableStyle: {
    borderWidth: 2,
    borderColor: paletOfColors.lightGray,
    borderRadius: 5,
  },
  containerChildrenRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  containerChildrenRow_Reverse: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#DDDA",
  },
  textStyleGrey: {
    fontSize: 28,
    color: paletOfColors.white,
    letterSpacing: 2,
    fontWeight: "bold",
  },
  textStyleBlack: {
    fontSize: 28,
    color: paletOfColors.black,
    letterSpacing: 2,
    fontWeight: "bold",
  },
});
