import { Pressable, StyleSheet, Text, View } from "react-native";
import { paletOfColors } from "../../utils/colors";
import { IconBack, IconHome } from "./components";

export function Control_Navigation() {
  return (
    <View style={styles.containerControlPanel}>
      <Pressable>
        <IconHome/>
      </Pressable>
      <Pressable onPress={()=>console.log("Press Back")}>
        <IconBack size={15} color={"#000"}/>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  containerControlPanel: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: paletOfColors.lightGray,
  },
});
