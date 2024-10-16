import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export function AntDesing_Icon({ name, color, size }) {
  return <AntDesign name={name} size={size} color={color} />;
}
export function Material_Icon({ name, color, size }) {
  return <MaterialIcons name={name} size={size} color={color} />;
}
