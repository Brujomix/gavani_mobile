import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export function Business_OnLine({ onLine }) {
  const [isOnLine, setIsOnLine] = useState(false);

  useEffect(() => {
    onLine ? setIsOnLine(true) : setIsOnLine(false);
  }, [onLine]);

  return (
    <View style={isOnLine ? styles.containerIsOnLine : styles.containerOffline}>
      <Text style={styles.styletext}>{isOnLine ? "OnLine" : "Offline"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerIsOnLine: {
    width: "100%",
    height: 60,
    backgroundColor: "#0F4",
    marginTop: 30,
  },
  containerOffline: {
    width: "100%",
    height: 60,
    backgroundColor: "#F00",
    marginTop: 30,
  },
  styletext: {
    fontSize: 35,
    fontStyle: "normal",
    letterSpacing: 2,
    alignSelf: "center",
  },
});
