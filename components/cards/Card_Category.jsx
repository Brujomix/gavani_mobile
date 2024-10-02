import { View, StyleSheet, Pressable, Text, Image } from "react-native";

import imageLess from "../../assets/imageLess.png";

export function Card_Category({ category }) {
  return (
    <Pressable
      style={styles.pressableStyle}
      onPress={() => console.log("Prees It")}
    >
      <View style={styles.containerChildren}>
        <Image style={styles.imageStyle} source={imageLess} />
        <Text style={styles.textStyle}>{category.cat_name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressableStyle: {
    borderWidth: 2,
    borderColor: "#FFF",
    borderRadius: 10,
    padding: 5,
    backgroundColor: "#000",
    marginTop: 10,
  },
  containerChildren: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 5,
    gap: 15,
  },
  imageStyle: {
    width: 60,
    height: 60,
    objectFit: "contain",
  },
  textStyle: {
    fontSize: 20,
    color: "#FFF",
    fontStyle: "italic",
  },
});
