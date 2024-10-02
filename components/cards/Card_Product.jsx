import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Buttons_Cart } from "../ui/Buttons_Cart";
import { useState } from "react";

import imageLess from "../../assets/imageLess.png";

const { width } = Dimensions.get("screen");

export function Card_Product({ product }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <View style={styles.containerProducts}>
      <View style={styles.containerChildren}>
        <Text style={styles.textPro_name}>{product.pro_name}</Text>
        <View style={styles.containerInfoWithImage}>
          <View style={styles.containerImage}>
            <Image
              style={styles.imageStyle}
              source={isLoading ? imageLess : {uri: product.pro_url_image}}
              onLoad={()=>setIsLoading(false)}
              defaultSource={imageLess}
            />
          </View>
          <View style={styles.containerInfoProductText}>
            <Text style={styles.textPro_Desc}>{product.pro_desc}</Text>
            <Text
              style={styles.textPro_Precio}
            >{`$ ${product.pro_precio.toLocaleString("de-DE")}`}</Text>
          </View>
        </View>
        <View style={styles.containerButtonsCart}>
          <Buttons_Cart pro_iden={product.pro_iden} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerProducts: {
    width: width * 0.8,
    padding: 15,
    flexDirection: "column",
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: "#FFF",
    borderRadius: 10,
    overflow: "hidden",
  },
  containerChildren: {},
  containerButtonsCart: {
    padding: 10,
  },
  containerInfoWithImage: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  containerInfoProductText: {
    gap: 10,
  },
  containerImage: {},
  imageStyle: {
    width: 120,
    height: 120,
    objectFit: "contain",
  },
  textPro_name: {
    fontSize: 25,
    alignSelf: "center",
    color: "#FFF",
    fontStyle: "italic",
    marginBottom:5
  },
  textPro_Desc: {
    fontSize: 18,
    alignSelf: "center",
    color: "#FFF",
    fontStyle: "italic",
  },
  textPro_Precio: {
    fontSize: 25,
    alignSelf: "flex-end",
    color: "#FFF",
  },
});
