import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const cartScreen = () => {
    const cartItems = useSelector((state) => state.cart.items)
    console.log(cartItems)
  return (
    <View className="items-center justify-center mt-10">
      {
        cartItems.map((item,index)=>(
            <View>
                <Text>{item.name} {item.quantity}</Text>
            </View>
        ))
      }
    </View>
  )
}

export default cartScreen