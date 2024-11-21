import { Avatar } from "react-native-elements";
import { paletOfColors } from "../../utils/colors";
import { StyleSheet, View } from "react-native";
import * as ImagePiker from "expo-image-picker";
import { useEffect } from "react";
import {
  usePostImageProfileMutation,
  useGetImageProfileQuery,
} from "../../services/profile_Service";
import {
  Icon_Dinamic,
  Montserrat_Text,
  Pressable_Dinamic,
} from "../../components";
import { skipToken } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";
import { ActivityLoadingStyle } from "../../utils/globalStyles";

export function Avatar_User() {
  const { userInfo } = useSelector((state) => state.User);

  const [triggerPostImage, resultImageProfile] = usePostImageProfileMutation();
  const { data, error, isloading } = useGetImageProfileQuery(
    userInfo.local_Id || skipToken
  );

  const handleAddProfileImage = async () => {
    const { granted } = await ImagePiker.requestCameraPermissionsAsync();

    if (granted && local_Id) {
      let result = await ImagePiker.launchCameraAsync({
        mediaTypes: ImagePiker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.5,
      });

      if (!result.canceled) {
        triggerPostImage({
          local_Id: local_Id,
          imageProfile: result.assets[0].base64,
        });
      }
    }
  };

  console.warn(data, "DATA Desde GEt Image Profile")

  useEffect(()=>{
    
  },[resultImageProfile])

  return (
    <View style={styles.containerAvatar}>
      {isloading ? (
        <ActivityIndicator
          style={ActivityLoadingStyle}
          size={90}
          color={paletOfColors.black}
        />
      ) : (
        <Avatar
          rounded
          size="xlarge"
          source={{ uri: "/" }}
          title={"IMG"}
          titleStyle={{ color: paletOfColors.black }}
          containerStyle={{
            backgroundColor: paletOfColors.lightGray,
            borderWidth: 3,
            borderColor: paletOfColors.lightGray,
            marginBottom: 20,
          }}
        />
      )}

      <Montserrat_Text style={styles.errorRegister}>{error}</Montserrat_Text>
      <Pressable_Dinamic
        onPress={handleAddProfileImage}
        style={styles.buttonCamera}
      >
        <Icon_Dinamic name="add-a-photo" size={38} />
      </Pressable_Dinamic>
    </View>
  );
}

const styles = StyleSheet.create({
  containerAvatar: {
    alignSelf: "center",
  },
  buttonCamera: {
    position: "absolute",
    right: 95,
    top: 118,
    backgroundColor: paletOfColors.lightGray,
  },
});
