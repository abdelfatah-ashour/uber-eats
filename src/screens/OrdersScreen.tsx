import { Order_Status } from "@/@types/Order";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import LottieView from "lottie-react-native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

type IOrder = {
  id: string;
  restaurantName: string;
  published_date: string;
  status: Order_Status.IN_PROGRESS | Order_Status.COMPLETED;
  items: {
    id: number;
    name: string;
    image_url: string;
    price: number;
  }[];
};

const OrdersScreen = () => {
  const ordersCollection = collection(db, "Orders");
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function getOrders() {
    setLoading(true);
    const data = await getDocs(ordersCollection);

    setOrders(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as IOrder[]
    );
    setLoading(false);
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eee" }}>
      {!loading ? (
        <>
          {orders.length ? (
            <FlatList
              contentContainerStyle={{ gap: 10 }}
              data={orders}
              renderItem={({ item }) => {
                return (
                  <View
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: 10,
                      padding: 20,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 20,
                      }}
                    >
                      <Text style={{ fontSize: 16, fontWeight: "700" }}>
                        {item.restaurantName}
                      </Text>
                      <Text
                        style={{
                          backgroundColor: "green",
                          color: "#fff",
                          padding: 6,
                          fontSize: 14,
                          fontWeight: "500",
                          textTransform: "capitalize",
                        }}
                      >
                        completed
                      </Text>
                    </View>
                    <View style={{ gap: 10 }}>
                      {item.items.map((food) => (
                        <View
                          key={food.id}
                          style={{
                            flexDirection: "row",
                            gap: 10,
                            flexWrap: "nowrap",
                          }}
                        >
                          <Image
                            source={{ uri: food.image_url }}
                            alt={food.name}
                            style={{ height: 60, width: 60 }}
                          />
                          <View>
                            <Text>{food.name}</Text>
                            <Text>${food.price}</Text>
                          </View>
                        </View>
                      ))}
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 5,
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <MaterialIcons name="access-time-filled" size={16} />
                      <Text style={{ fontSize: 12 }}>
                        {new Date(item.published_date).toDateString()}
                      </Text>
                    </View>
                  </View>
                );
              }}
              keyExtractor={({ id }) => id}
              style={{ paddingHorizontal: 10, flex: 1 }}
            />
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LottieView
                source={require("../../assets/animations/empty.json")}
                style={{ width: "100%", height: 400 }}
                autoPlay
                loop
              />
            </View>
          )}
        </>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <LottieView
            source={require("../../assets/animations/loading-fork.json")}
            style={{ width: "100%", height: 400 }}
            autoPlay
            loop
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({});
