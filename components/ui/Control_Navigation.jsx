import { Pressable, StyleSheet, View } from "react-native";
import { paletOfColors } from "../../utils/colors";
import { IoArrowBack, IoHome } from "react-icons/io5";

export function Control_Navigation() {
  return (
    <View style={styles.containerControlPanel}>
      <Pressable onPress={() => console.log("Press Home")}>
        {/* <IoHome size={15} color="#000" /> */}
      </Pressable>
      <Pressable onPress={() => console.log("Press Back")}>
        {/*<IoArrowBack size={15} color="#000" /> */}
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
