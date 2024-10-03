import { View, StyleSheet, Pressable, Text } from "react-native";
import { Image_Dianamic } from "../ui/Image_Dianamic";
import { paletOfColors } from "../../utils/colors";

export function Card_Category({ category }) {
  return (
    <Pressable
      style={styles.pressableStyle}
      onPress={() => console.log(`Prees On Category ${category.cat_name}`)}
    >
      <View style={styles.containerChildren}>
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
  },
  containerChildren: {
    flexDirection: "row",
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
