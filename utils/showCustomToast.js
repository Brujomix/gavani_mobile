import Toast from 'react-native-toast-message';

const showCustomToast = (type, text1, text2) => {
  Toast.show({
    type: type,
    text1: text1,
    text2: text2,
    text1Style: { color: "#000", fontSize: 18, fontWeight: "bold" },
    text2Style: { color: "#000", fontSize: 14, fontStyle: "italic" },
    autoHide: true,
    topOffset: 55,
    visibilityTime: 5000
  });
};

export default showCustomToast;