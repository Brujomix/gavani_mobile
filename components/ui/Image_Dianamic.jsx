import { useState } from "react";
import { Image, View } from "react-native";
import imageLess from "../../assets/imageLess.png";

export function Image_Dianamic({ styleImage, uriURL, altProp }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      style={styleImage}
      alt={altProp}
      source={isLoading ? imageLess : uriURL ? imageLess : { uri: uriURL }}
      onLoad={() => setIsLoading(false)}
      resizeMode="contain"
    />
  );
}
