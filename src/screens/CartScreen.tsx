import { Order_Status } from "@/@types/Order";
import Divider from "@/components/Divider";
import { useAppSelector } from "@/hooks/ReduxHooks";
import { db } from "@/lib/firebase";
import items from "@/lib/items-data.json";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { addDoc, collection } from "firebase/firestore";
import React, { Fragment, useCallback, useMemo } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { StackParamList } from "./HomeNavigator";

type Props = NativeStackScreenProps<StackParamList, "cart">;

const CartScreen = ({ route, navigation }: Props) => {
  const { cart, restaurant } = useAppSelector((s) => s.cart);
  const ordersCollection = collection(db, "Orders");

  const itemsResult = useMemo(() => {
    return items.data.filter((item) => cart.includes(item.id));
  }, []);

  const checkoutOrders = useCallback(async () => {
    const result = await addDoc(ordersCollection, {
      items: itemsResult,
      restaurantName: restaurant?.name,
      published_date: new Date(Date.now()).toDateString(),
      status: Order_Status.IN_PROGRESS,
    });

    if (result) {
      navigation.getParent()?.goBack();
      navigation.push("CompleteOrder", {
        id: result.id,
      });
    }
  }, []);

  return (
    <SafeAreaView
      style={{ paddingHorizontal: 20, paddingVertical: 20, gap: 10 }}
    >
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontWeight: "700",
            marginVertical: 10,
          }}
        >
          {restaurant?.name}
        </Text>
      </View>
      {itemsResult.map((item, i) => (
        <Fragment key={item.id}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 15,
            }}
          >
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
          <Divider variant="horizontal" />
        </Fragment>
      ))}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "600" }}>Subtotal</Text>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>
          ${itemsResult.reduce((a, b) => a + b.price, 0).toFixed(2)}
        </Text>
      </View>
      <TouchableHighlight
        style={{
          backgroundColor: "#000",
          width: "80%",
          alignSelf: "center",
          borderRadius: 30,
          paddingVertical: 10,
          marginVertical: 20,
        }}
        onPress={() => {
          checkoutOrders();
        }}
      >
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View
            style={{
              flexGrow: 1,
              flexDirection: "row",
              gap: 10,
              justifyContent: "center",
            }}
          >
            <MaterialIcons name="payment" color="#ccc" size={20} />
            <Text
              style={{
                color: "#ccc",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Checkout
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              alignSelf: "flex-end",
              color: "#ccc",
              paddingRight: 15,
            }}
          >
            ${itemsResult.reduce((a, b) => a + b.price, 0).toFixed(2)}
          </Text>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
