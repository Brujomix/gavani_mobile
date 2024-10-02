import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, View } from "react-native";
import {
  Carroucel_Products,
  Container_Categories,
  Header_App,
  Title_Dinamic,
} from "./components";

import { products, categories } from "./dataTest.json";

export default function App() {
  return (
    <ScrollView style={styles.containerScroll}>
      <View style={styles.containerPrincipal}>
        <Header_App />
        <Title_Dinamic text="Productos Seleccionados" />
        <Carroucel_Products products={products} />
        <Title_Dinamic text="Nuestras Categorias" />
        <Container_Categories categories={categories} />
        <StatusBar style="light" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerScroll: {
    backgroundColor: "#000",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  containerPrincipal: {
    gap: 30,
  },
});
