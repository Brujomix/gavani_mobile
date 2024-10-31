import { View, StyleSheet } from "react-native";
import { Montserrat_Text } from "../components";
import { ScreenWrapper } from "../wrappers";

export function Tickets_Screen() {

  return (
    <ScreenWrapper>
      <View style={styles.containerTicketsScreen}>
        <Montserrat_Text>Tickets Screen</Montserrat_Text>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  containerTicketsScreen: {
    flex: 1,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});