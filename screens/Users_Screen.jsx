import { View } from "react-native";
import { Form_Login, Montserrat_Text } from "../components";
import { ScreenWrapper } from "../wrappers";
import { useSelector } from "react-redux";

export function Users_Screen() {
  const { isLogged } = useSelector((state) => state.User);
  return (
    <ScreenWrapper>
      <View>
        <Montserrat_Text>Users Screen</Montserrat_Text>
        <Form_Login />
      </View>
    </ScreenWrapper>
  );
}
