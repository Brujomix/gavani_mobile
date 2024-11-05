import { Avatar } from "react-native-elements";
import { paletOfColors } from "../../utils/colors";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

export function Avatar_User({ imageProfile }) {

  const { userInfo } = useSelector((state) => state.User);
  
  return (
    <View style={styles.containerAvatar}>
      <Avatar
        rounded
        size="xlarge"
        source={
          userInfo && userInfo.imageProfile
            ? { uri: userInfo.imageProfile }
            : imageProfile
            ? { uri: imageProfile }
            : null
        }
        title={!userInfo?.imageProfile && !imageProfile ? "US" : ""}
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
