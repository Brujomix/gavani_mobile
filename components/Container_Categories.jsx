import { FlatList, StyleSheet } from "react-native";
import { Card_Category } from "../components";

export function Container_Categories({ categories }) {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.cat_iden}
      renderItem={({ item, index }) => (
        <Card_Category category={item} index={index} />
      )}
      contentContainerStyle={styles.containerCategories}
    />
  );
}

const styles = StyleSheet.create({
  containerCategories: {
    padding: 10,
    gap: 20,
  },
});
