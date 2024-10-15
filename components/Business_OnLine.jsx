import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Montserrat_Text } from "./ui/Montserrat_Text";

export function Business_OnLine({ onLine }) {
  const [isOnLine, setIsOnLine] = useState(false);

  useEffect(() => {
    onLine ? setIsOnLine(true) : setIsOnLine(false);
  }, [onLine]);

  return (
    <View style={isOnLine ? styles.containerIsOnLine : styles.containerOffline}>
      <Montserrat_Text style={styles.styletext}>
        {isOnLine ? "Comercio OnLine" : "Comercio OffLine"}
      </Montserrat_Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerIsOnLine: {
    width: "100%",
    height: 60,
    backgroundColor: "#0F4",
    marginTop: 50,
  },
  containerOffline: {
    width: "100%",
    height: 60,
    backgroundColor: "#F00",
    marginTop: 30,
    alignSelf: "center",
  },
  styletext: {
    fontSize: 35,
    fontStyle: "normal",
    letterSpacing: 2,
    alignSelf: "center",
  },
});
