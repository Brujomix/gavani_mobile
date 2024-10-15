import { Pressable, StyleSheet, Text, View } from "react-native";
import { paletOfColors } from "../../utils/colors";


export function Control_Navigation({navigation}) {
  return (
    <View style={styles.containerControlPanel}>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Text>HOME</Text>
        {/* <HomeIcon /> */}
      </Pressable>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>BACK</Text>
        {/* <BackIcon /> */}
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
