import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Pressable_Button_Dinamic, Best_Sellers } from "./components";

import HamburguesasImage from "./assets/categories_images/Hamburguesas.webp";
import PizzasImage from "./assets/categories_images/Pizzas.webp";
import SandwichesImage from "./assets/categories_images/Sandwiches.webp";
import MenusImage from "./assets/categories_images/Menus.webp";
import CombosImage from "./assets/categories_images/Combos.webp";

export default function App() {
  return (
    <View style={styles.container}>
      <Best_Sellers />
      <View style={styles.containerCategories}>
        <Pressable_Button_Dinamic
          categoryName="Hamburguesas"
          srcImage={HamburguesasImage}
        />
        <Pressable_Button_Dinamic
          categoryName="Pizzas"
          srcImage={PizzasImage}
        />
        <Pressable_Button_Dinamic
          categoryName="Sandwiches"
          srcImage={SandwichesImage}
        />
        <Pressable_Button_Dinamic categoryName="Menus" srcImage={MenusImage} />
        <Pressable_Button_Dinamic
          categoryName="Combos"
          srcImage={CombosImage}
        />
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  containerCategories: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 15,
    padding: 10,
  },
});
