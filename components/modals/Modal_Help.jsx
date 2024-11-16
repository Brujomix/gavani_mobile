import { useState } from "react";
import { Dimensions, Modal, StyleSheet, View } from "react-native";
import { Pressable_Dinamic } from "../ui/Pressable_Dinamic";
import { Montserrat_Text } from "../ui/Montserrat_Text";
import { paletOfColors } from "../../utils/colors";
import { Icon_Dinamic } from "../ui/Icon_Dinamic";

const { width, height } = Dimensions.get("screen");

export function Modal_Help({ title, textInfo, disabled }) {
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
            <View style={styles.containerTextInfoTitle}>
              <Montserrat_Text style={styles.textTitle}>
                {title}
              </Montserrat_Text>
              <Montserrat_Text style={styles.textInfo}>
                {textInfo}
              </Montserrat_Text>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable_Dinamic
        style={styles.pressableOpenModal}
        disabled={disabled}
        onPress={() => setOpenModal(true)}
      >
        <Icon_Dinamic name={"help"} size={25} />
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
    opacity: 0.87,
  },
  modalViewChildren: {
    backgroundColor: paletOfColors.white,
    width: width * 0.8,
    height: height * 0.5,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 10,
    elevation: 8,
    shadowColor: paletOfColors.white,
  },
  buttonCloseModal: { zIndex: 100, position: "relative", top: 50, right: -125 },

  pressableOpenModal: {
    borderWidth: 1,
    borderColor: paletOfColors.black,
    padding: 2,
    backgroundColor: paletOfColors.lightGray,
  },
  containerTextInfoTitle: {
    flex: 1,
    width: width * 0.75,
    marginTop:40
  },
  textTitle: {
    marginTop: 10,
    fontSize: 28,
    fontStyle: "italic",
  },
  textInfo: {
    fontSize: 18,
    flex: 1,
    width: width * 0.75,
    marginTop: 20,
    alignSelf: "center",
  },
});
