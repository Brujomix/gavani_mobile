import { Image } from "react-native";

export function Image_Dianamic({ styleImage, uriURL, altProp }) {
  return (
    <Image
      style={styleImage}
      alt={altProp}
      source={{ uri: uriURL }}
      resizeMode="contain"
    />
  );
}
