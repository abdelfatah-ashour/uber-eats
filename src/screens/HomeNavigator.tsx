import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack/lib/typescript/src/types";
import React from "react";
import CartScreen from "./CartScreen";
import CompleteOrder from "./CompleteOrder";
import HomeScreen from "./HomeScreen";
import RestaurantDetails from "./RestaurantDetails";

export type StackParamList = {
  default: undefined;
  details: { id: string };
  cart: undefined;
  CompleteOrder: { id: string };
};

const Stack = createNativeStackNavigator<StackParamList>();

const NavigatorOption: NativeStackNavigationOptions = {
  headerShown: false,
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="default" screenOptions={NavigatorOption}>
      <Stack.Screen name="default" component={HomeScreen} />
      <Stack.Screen name="details" component={RestaurantDetails} />
      <Stack.Screen
        name="cart"
        component={CartScreen}
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen name="CompleteOrder" component={CompleteOrder} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
