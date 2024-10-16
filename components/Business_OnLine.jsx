import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Montserrat_Text } from "./ui/Montserrat_Text";

export function Business_OnLine({ onLine }) {
  
  /* const [isOnLine, setIsOnLine] = useState(false);

  useEffect(() => {
    onLine ? setIsOnLine(true) : setIsOnLine(false);
  }, [onLine]); */

  return (
    <View style={onLine ? styles.containerIsOnLine : styles.containerOffline}>
      <Montserrat_Text style={styles.styletext}>
        {onLine ? "Comercio OnLine" : "Comercio OffLine"}
      </Montserrat_Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerIsOnLine: {
   width:"100%",
   backgroundColor: "#0F4",
  },
  containerOffline: {
    width:"100%",
    backgroundColor: "#F00",
  },
  styletext: {
    fontSize: 35,
    fontStyle: "normal",
    alignSelf: "center",
  },
});
