import { Avatar } from "react-native-elements";
import { paletOfColors } from "../../utils/colors";
import { StyleSheet, View } from "react-native";
import * as ImagePiker from "expo-image-picker";
import { useEffect, useState } from "react";
import {
  usePutImageProfileMutation,
  useGetImageProfileQuery,
} from "../../services/profile_Service";
import { Icon_Dinamic, Pressable_Dinamic } from "../../components";
import { useSelector } from "react-redux";

export function Avatar_User() {
  const { userInfo } = useSelector((state) => state.User);

  const [imageUser, setImageUser] = useState(null);

  const [triggerPutImage, resultImageProfile] = usePutImageProfileMutation();

  const { data } = useGetImageProfileQuery(userInfo.localId);

  const handleAddProfileImage = async () => {
    const { granted } = await ImagePiker.requestCameraPermissionsAsync();

    if (granted) {
      let result = await ImagePiker.launchCameraAsync({
        mediaTypes: ImagePiker.MediaTypeOptions.All,
        //allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.5,
      });

      if (!result.canceled) {
        const base64Image = `data:image/png;base64,${result.assets[0].base64}`;
        triggerPutImage({
          localId: userInfo.localId,
          imageProfile: base64Image,
        });
      }
    }
  };

  useEffect(() => {
    if (data) {
      setImageUser(data.imageProfile);
    }

    if (resultImageProfile.isSuccess) {
      const { imageProfile } = resultImageProfile.data;
      setImageUser(imageProfile);
    } else if (resultImageProfile.isError) {
      console.error(resultImageProfile.error);
      setImageUser(null);
    }
  }, [data, resultImageProfile]);

  return (
    <View style={styles.containerAvatar}>
      <Avatar
        rounded
        size="xlarge"
        source={imageUser ? { uri: imageUser } : null}
        title={!imageUser ? "IMG" : null}
        titleStyle={{ color: paletOfColors.black }}
        containerStyle={{
          backgroundColor: paletOfColors.lightGray,
          borderWidth: 3,
          borderColor: paletOfColors.lightGray,
          marginBottom: 20,
        }}
      />

      <Pressable_Dinamic
        onPress={() => handleAddProfileImage()}
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
