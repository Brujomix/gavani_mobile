import { useState } from "react";
import { Image, StyleSheet } from "react-native";

import imageLess from "../../assets/imageLess.png";

export function Image_Dianamic({ aditionaStyles, uriURL, altProp }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Image
      style={{ aditionaStyles, ...styles.imageStyle }}
      alt={altProp}
      source={isLoading ? imageLess : { uri: uriURL }}
      onLoad={() => setIsLoading(false)}
    />
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 80,
    height: 80,
    objectFit: "contain",
  },
});
