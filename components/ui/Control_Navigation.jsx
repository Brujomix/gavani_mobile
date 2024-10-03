import { Pressable, StyleSheet, Text, View } from "react-native";
import { paletOfColors } from "../../utils/colors";

export function Control_Navigation() {
  return (
    <View style={styles.containerControlPanel}>
      <Pressable>
        <Text>Home</Text>
      </Pressable>
      <Pressable>
        <Text>BACK</Text>
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
