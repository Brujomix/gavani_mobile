import { View, StyleSheet, Pressable, Text } from "react-native";
import { Image_Dianamic } from "../ui/Image_Dianamic";
import { paletOfColors } from "../../utils/colors";

export function Card_Category({ category, index }) {
  return (
    <Pressable
      style={styles.pressableStyle}
      onPress={() => console.log(`Prees On Category ${category.cat_name}`)}
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
        <Text style={styles.textStyle}>{category.cat_name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressableStyle: {
    borderWidth: 2,
    borderColor: paletOfColors.lightGray,
    borderRadius: 5,
    backgroundColor: "#333",
    padding: 5,
    shadowColor: paletOfColors.white,
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: { width: 8, height: 8 },
    elevation: 5,
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
  },
  textStyle: {
    fontSize: 28,
    color: paletOfColors.darkGray,
    fontStyle: "italic",
    letterSpacing: 3,
  },
});
