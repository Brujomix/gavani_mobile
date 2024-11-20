import { Avatar } from "react-native-elements";
import { paletOfColors } from "../../utils/colors";
import { StyleSheet, View } from "react-native";

export function Avatar_User({ imageProfile }) {

  return (
    <View style={styles.containerAvatar}>
      <Avatar
        rounded
        size="xlarge"
        source={{uri:imageProfile ? imageProfile : null}}
        title={"US"}
        titleStyle={{ color: paletOfColors.black }}
        containerStyle={{
          backgroundColor: paletOfColors.lightGray,
          borderWidth: 3,
          borderColor: paletOfColors.lightGray,
          marginBottom: 20,
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
