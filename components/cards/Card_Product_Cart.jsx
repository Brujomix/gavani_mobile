import { View } from 'react-native'
import React from 'react'
import { Montserrat_Text } from '../ui/Montserrat_Text'

export function Card_Product_Cart({product}) {
  return (
    <View>
      <Montserrat_Text>{product.pro_name}</Montserrat_Text>
    </View>
  )
}

