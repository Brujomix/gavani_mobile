import { View, Text, Image, StyleSheet } from "react-native";

import imageLess from "../../assets/imageLess.png";

export function Card_Product({product}) {
  return (
    <View
      style={styles.containerProducts}
    >
      <View style={styles.containerChildren}>
        <Image style={styles.imageStyle} source={imageLess} />
        <Text>{product.pro_name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerProducts: {
    borderWidth: 2,
    borderColor:"#000",
    padding:5
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
