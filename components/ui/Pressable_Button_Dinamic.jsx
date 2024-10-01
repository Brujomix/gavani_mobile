import React from "react";
import { Pressable, Image, StyleSheet, View, Text } from "react-native";

export function Pressable_Button_Dinamic({ categoryName, srcImage }) {
  return (
    <Pressable
      style={styles.pressableStyle}
      onPress={() => console.log("Prees It")}
    >
      <View style={styles.containerChildren}>
        <Image
          style={styles.imageStyle}
          source={srcImage}
        />
        <Text style={styles.textStyle}>{categoryName}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressableStyle: {
    borderWidth:2,
    borderColor: "#FFF",
    borderRadius: 10,
    padding: 5,
    backgroundColor: "#000",
  },
  containerChildren: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  textStyle: {
    fontSize: 30,
    color: "#FFF",
    fontStyle: "italic",
  },
});
