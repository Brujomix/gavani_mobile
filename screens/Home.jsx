import { View, StyleSheet } from "react-native";
import {
  Carroucel_Products,
  Container_Categories,
  Title_Dinamic,
} from "../components";

import { products, categories } from "../dataTest.json";

export function Home() {
  return (
    <View style={styles.containerPrincipal}>
      <Title_Dinamic text="Productos Seleccionados" />
      <Carroucel_Products products={products} />
      <Title_Dinamic text="Nuestras Categorias" />
      <Container_Categories categories={categories} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    gap: 30,
  },
});
