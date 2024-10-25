import { useState } from "react";
import { Alert, Dimensions, Modal, StyleSheet, View } from "react-native";
import { Montserrat_Text } from "../ui/Montserrat_Text";
import { paletOfColors } from "../../utils/colors";

const {width} = Dimensions.get("screen")

export function Modal_PopUP({ textInfoPopUP, isOpen }) {
    
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isOpen}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.containerBodyModal}>
            <Montserrat_Text>{textInfoPopUP}</Montserrat_Text>
        </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    position:"absolute",
    top:30,
    right:30,
    backgroundColor: "white",
    width: width * .5,
    height: 120,
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: paletOfColors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  containerBodyModal: {},
});
