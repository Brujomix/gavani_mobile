import { Text, StyleSheet } from 'react-native'


export const Montserrat_Text = ({children, style}) => {
  return (
    <Text style={[styles.textStyle, style]}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  textStyle:{
    fontWeight:"bold",
    fontFamily:"Montserrat"
  }
})