import { View, FlatList, StyleSheet } from "react-native";
import { Card_Category } from "../components";

import { categories } from "../dataTest.json";

export function Container_Categories() {
  return (
    <View style={styles.containerCategories}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.cat_iden}
        renderItem={({ item }) => <Card_Category category={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerCategories: {
    padding: 10,
  },
});
