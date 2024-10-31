import { Avatar } from "react-native-elements";
import { paletOfColors } from "../../utils/colors";
import { StyleSheet, View } from "react-native";

export function Avatar_User({ uri }) {
  return (
    <View style={styles.containerAvatar}>
      <Avatar
        rounded
        size="xlarge"
        source={{ uri }}
        title="US"
        titleStyle={{color:paletOfColors.black}}
        containerStyle={{
          backgroundColor: paletOfColors.darkGray,
          borderWidth: 3,
          borderColor: paletOfColors.black,
          marginBottom:20
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerAvatar: {
    alignSelf: "center",
  },
});
