import { useState } from "react";
import { Dimensions, Modal, StyleSheet, View } from "react-native";
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
      >
        <View style={styles.modalView}>
          <Pressable_Dinamic
            style={styles.buttonCloseModal}
            onPress={() => setOpenModal(!openModal)}
          >
            <Entypo name="cross" size={35} color={paletOfColors.black} />
          </Pressable_Dinamic>
          <View style={styles.modalViewChildren}>
            <View style={styles.containerBodyModal}>{children}</View>
          </View>
        </View>
      </Modal>
      <Pressable_Dinamic disabled={disabled} onPress={() => setOpenModal(true)}>
        <Montserrat_Text style={styles.textOpenModal}>
          {textButton}
        </Montserrat_Text>
      </Pressable_Dinamic>
    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:paletOfColors.black,
    opacity:.8
  },
  modalViewChildren: {
    backgroundColor: paletOfColors.white,
    width: width * 0.8,
    height: height * 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 5,
    shadowColor: paletOfColors.white,
  },

  buttonCloseModal: {
    zIndex:100,
    position:"absolute",
    right:-150,
    top:15
  },

  textOpenModal: {
    alignSelf: "center",
    fontSize: 16,
  },
});
