import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/slices/cartReducer";
import { useNavigation } from "@react-navigation/native";

const homeScreen = () => {

  const navigation = useNavigation()

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // state.REDUCER_NAME.INITIAL_STATE_NAME

  const getTotalItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleAdd = (id, name) => {
    dispatch(addItem({ id, name }));
  };

  const handleRemove = (id) => {
    dispatch(removeItem({ id }));
  };

  return (
    <View style={styles.container}>
      <View className="flex-row items-center p-4">
        <Image
          className="w-48 h-32 mr-5 rounded-md"
          source={{
            uri: "https://i0.shbdn.com/photos/90/92/37/x5_1144909237pfv.jpg",
          }}
        />
        <View className="justify-center items-center">
          <Text className="mb-4">VOLVO S60</Text>
          <View className="flex-row gap-4 items-center">
            <TouchableOpacity
              className="border rounded-full w-8 h-8 items-center bg-orange-500"
              onPress={() => handleRemove(1)}
            >
              <Text className="text-lg font-extrabold text-white">-</Text>
            </TouchableOpacity>
            <Text className="text-lg">
              {cartItems.find((item) => item.id === 1)?.quantity || 0}
            </Text>
            <TouchableOpacity
              className="border rounded-full w-8 h-8 items-center bg-orange-500"
              onPress={() => handleAdd(1, "VOLVO S60")}
            >
              <Text className="text-lg font-extrabold text-white">+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="flex-row items-center p-4 mt-10">
        <Image
          className="w-48 h-32 mr-5 rounded-md"
          source={{
            uri: "https://store.donanimhaber.com/23/b2/02/23b202ba83068241f3de0c8cab14027c.jpg",
          }}
        />
        <View className="justify-center items-center">
          <Text className="mb-4">BMW 520İ</Text>
          <View className="flex-row gap-4 items-center">
            <TouchableOpacity
              className="border rounded-full w-8 h-8 items-center bg-orange-500"
              onPress={() => handleRemove(2)}
            >
              <Text className="text-lg font-extrabold text-white">-</Text>
            </TouchableOpacity>
            <Text className="text-lg">
              {cartItems.find((item) => item.id === 2)?.quantity || 0}
            </Text>
            <TouchableOpacity
              className="border rounded-full w-8 h-8 items-center bg-orange-500"
              onPress={() => handleAdd(2, "BMW 520İ")}
            >
              <Text className="text-lg font-extrabold text-white">+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity
        className="w-64 h-12 bg-green-500 rounded-md mt-6 items-center justify-center"
        onPress={() => navigation.navigate("cart")}
      >
        <Text className="text-white text-lg font-semibold">
          Sepette bulun araç sayısı {getTotalItemCount()}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default homeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    marginTop: 40,
  },
});
