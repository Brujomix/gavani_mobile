import { View, StyleSheet, Pressable, Text, Image } from "react-native";
import imageLess from "../../assets/imageLess.png";
import { useState } from "react";

export function Card_Category({ category }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Pressable
      style={styles.pressableStyle}
      onPress={() => console.log("Prees It")}
    >
      <View style={styles.containerChildren}>
        <Image
          style={styles.imageStyle}
          source={isLoading ? imageLess : { uri: category.cat_url_image }}
          onLoad={() => setIsLoading(false)}
        />
        <Text style={styles.textStyle}>{category.cat_name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressableStyle: {
    borderWidth: 2,
    borderColor: "#FFF",
    borderRadius: 5,
    backgroundColor: "#555",
  },
  containerChildren: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  imageStyle: {
    width: 80,
    height: 80,
    objectFit: "contain",
  },
  textStyle: {
    fontSize: 23,
    color: "#FFF",
    fontStyle: "italic",
    letterSpacing: 3,
  },
});
