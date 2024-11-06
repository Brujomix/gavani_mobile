import { useState } from "react";
import { Dimensions, Modal, StyleSheet, View } from "react-native";
import { Pressable_Dinamic } from "../ui/Pressable_Dinamic";
import { Montserrat_Text } from "../ui/Montserrat_Text";
import { paletOfColors } from "../../utils/colors";
import { Icon_Dinamic } from "../ui/Icon_Dinamic";

const { width, height } = Dimensions.get("screen");

export function Modal_Dinamic({ children, textButton, disabled }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <View>
      <Modal animationType="fade" transparent={true} visible={openModal}>
        <View style={styles.modalView}>
          <Pressable_Dinamic
            style={styles.buttonCloseModal}
            onPress={() => setOpenModal(!openModal)}
          >
            <Icon_Dinamic name="close" size={35} color={paletOfColors.black} />
          </Pressable_Dinamic>
          <View style={styles.modalViewChildren}>
            <View style={styles.containerBodyModal}>{children}</View>
          </View>
        </View>
      </Modal>
      <Pressable_Dinamic
        style={styles.pressableOpenModal}
        disabled={disabled}
        onPress={() => setOpenModal(true)}
      >
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
    backgroundColor: paletOfColors.black,
    opacity: 0.9,
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
  buttonCloseModal: { zIndex: 100, position: "relative", top: 50, right: -125 },

  pressableOpenModal: {
    width: width * 0.5,
    marginTop: 20,
    borderWidth: 1,
    borderColor: paletOfColors.black,
    padding: 2,
    backgroundColor: paletOfColors.lightGray,
  },

  textOpenModal: {
    alignSelf: "center",
    fontSize: 18,
  },
});
