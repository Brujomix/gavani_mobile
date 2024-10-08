import { Text, StyleSheet } from 'react-native'


export const Edu_Text = ({children, style}) => {
  return (
    <Text style={{...styles.textStyle, ...style}}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  textStyle:{
    fontFamily:"Edu"
  }
})