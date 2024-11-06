import { View, StyleSheet, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { Input_Text } from "../ui/Input_Text";
import { Pressable_Dinamic } from "../ui/Pressable_Dinamic";
import { Montserrat_Text } from "../ui/Montserrat_Text";
import { useRegisterMutation } from "../../services/auth_Service";
import { paletOfColors } from "../../utils/colors";
import { Icon_Dinamic } from "../../components";
import * as ImagePiker from "expo-image-picker";
import { Avatar_User } from "../ui/Avatar_User";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/usersSlice";
import { usePostImageProfileMutation } from "../../services/app_Service";

const { width } = Dimensions.get("screen");

export function Form_Register({ navigation }) {
  const dispatch = useDispatch();

  const [triggerRegistration, resultRegister] = useRegisterMutation();
  const [triggerPostImage, resultImage] = usePostImageProfileMutation();

  //console.warn("result de REGISTER", resultRegister);
  //console.warn("result de IMAGE", resultImage);

  const [errors, setErrors] = useState({
    errorEmail: "",
    errorPassword: "",
    errorConfirmPassword: "",
    errorRegister: "",
  });

  const [datosUser, setDatosUser] = useState({
    email: "",
    password: "",
    imageProfile: "",
  });

  const handleAddProfileImage = async () => {
    const { granted } = await ImagePiker.requestCameraPermissionsAsync();

    if (granted) {
      let cameraData = await ImagePiker.launchCameraAsync({
        mediaTypes: ImagePiker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.5,
      });

      setDatosUser((pv) => ({
        ...pv,
        imageProfile: `data:image/jpg;base64,${cameraData.assets[0].base64}`,
      }));
    } else {
      setDatosUser((pv) => ({ ...pv, imageProfile: "" }));
    }
  };

  const handlePressConfirmar = () => {
    const { email, password } = datosUser;

    triggerRegistration({ email, password });
  };

  const checkPasswords = (text) => {
    if (datosUser.password === text && text) {
      setErrors((pv) => ({ ...pv, errorConfirmPassword: "" }));
    } else {
      setErrors((pv) => ({
        ...pv,
        errorConfirmPassword: "Contraseñas no Coinciden - Campo Obligatorio",
      }));
    }
  };

  const checkPassword = (text) => {
    const passwordRegex = /^.{6,}$/;
    if (passwordRegex.test(text) && text) {
      setErrors((pv) => ({ ...pv, errorPassword: "" }));
      setDatosUser((pv) => ({ ...pv, password: text }));
    } else {
      setDatosUser((pv) => ({ ...pv, password: text }));
      setErrors((pv) => ({
        ...pv,
        errorPassword: "Minimo 6 Caracteres - Campo Obligatorio",
      }));
    }
  };

  const checkEmail = (text) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(text) && text) {
      setErrors((pv) => ({ ...pv, errorEmail: "" }));
      setDatosUser((pv) => ({ ...pv, email: text }));
    } else {
      setDatosUser((pv) => ({ ...pv, email: text }));
      setErrors((pv) => ({
        ...pv,
        errorEmail: "No es un email Válido - Campo Obligatorio",
      }));
    }
  };

  useEffect(() => {
    switch (resultRegister.status) {
      case "fulfilled":
        const { email, idToken, localId, refreshToken } = resultRegister.data;

        triggerPostImage({
          localID: localId,
          imageProfile: datosUser.imageProfile,
        });

        if (resultImage.status === "fulfilled") {
          dispatch(
            setUser({
              isLogged: true,
              email: email,
              imageProfile: resultImage.originalArgs.imageProfile,
              id_Token: idToken,
              local_Id: localId,
              refresh_Token: refreshToken,
            })
          )
          navigation.navigate("Usuarios");
        }
        break;
      case "rejected":
        setErrors((pv) => ({
          ...pv,
          errorRegister: "Revisa Tus Credenciales",
        }));
        break;
      default:
        setErrors((pv) => ({ ...pv, errorRegister: "" }));
        break;
    }
  }, [resultRegister]);

  return (
    <View style={styles.containerLogin}>
      <Avatar_User imageProfile={datosUser.imageProfile} />
      <Pressable_Dinamic
        onPress={handleAddProfileImage}
        style={styles.buttonCamera}
      >
        <Icon_Dinamic name="add-a-photo" size={38} />
      </Pressable_Dinamic>

      <Input_Text
        label={"Email"}
        onChange={(text) => checkEmail(text)}
        error={errors.errorEmail}
      />
      <Input_Text
        label={"Password"}
        onChange={(text) => checkPassword(text)}
        error={errors.errorPassword}
      />
      <Input_Text
        label={"Confirmar Password"}
        onChange={(text) => checkPasswords(text)}
        error={errors.errorConfirmPassword}
      />

      <Pressable_Dinamic
        style={styles.pressableRegister}
        onPress={() => handlePressConfirmar()}
      >
        <Montserrat_Text style={styles.textPressableRegister}>
          Confimar
        </Montserrat_Text>
      </Pressable_Dinamic>

      <Montserrat_Text style={styles.errorRegister}>
        {errors.errorRegister ? errors.errorRegister : ""}
      </Montserrat_Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogin: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 18,
  },
  buttonCamera: {
    position: "absolute",
    right: 95,
    top: 118,
    backgroundColor: paletOfColors.lightGray,
  },
  pressableRegister: {
    width: width * 0.8,
    marginTop: 20,
    borderWidth: 1,
    borderColor: paletOfColors.black,
    padding: 2,
    backgroundColor: paletOfColors.lightGray,
  },
  textPressableRegister: {
    fontSize: 18,
    alignSelf: "center",
  },
  errorRegister: {
    fontSize: 16,
    color: paletOfColors.red,
    alignSelf: "center",
  },
});
