import { useState } from "react";
import { Alert, Dimensions, Modal, StyleSheet, View } from "react-native";
import { Pressable_Dinamic } from "../ui/Pressable_Dinamic";
import { Montserrat_Text } from "../ui/Montserrat_Text";
import { Entypo } from "@expo/vector-icons";
import { paletOfColors } from "../../utils/colors";

const { width, height } = Dimensions.get("screen");

export function Modal_Dinamic({ children, textButton, disabled }) {

  const [openModal, setOpenModal] = useState(false);

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={openModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setOpenModal(!openModal);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.containerBodyModal}>{children}</View>
          <Pressable_Dinamic
            style={styles.buttonCloseModal}
            onPress={() => setOpenModal(!openModal)}
          >
            <Entypo name="cross" size={35} color={paletOfColors.black} />
          </Pressable_Dinamic>
        </View>
      </Modal>
      <Pressable_Dinamic style={styles.pressableOpenModal} disabled={disabled} onPress={() => setOpenModal(true)}>
        <Montserrat_Text style={styles.textOpenModal}>
          {textButton}
        </Montserrat_Text>
      </Pressable_Dinamic>
    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "white",
    width: width,
    height: height,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent:"center",
    shadowColor: paletOfColors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  pressableOpenModal:{
    width:"90%",
  },
  buttonCloseModal: {
    position: "absolute",
    top: 30,
    right: 30,
  },
  textOpenModal: {
    alignSelf:"center",
    fontSize: 35,
  },
});
