import { StyleSheet, View } from "react-native";
import { Edu_Text } from "../components";
import { paletOfColors } from "../utils/colors";

export function Login_Screen({ route }) {
  console.log(route);
  
  return (
    <View style={styles.containerLogin}>
      <Edu_Text>Inicio de Session</Edu_Text>
      <Edu_Text>Page Login</Edu_Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: paletOfColors.black
  },
});
