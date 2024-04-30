import ButtonViewCard from "@/components/ButtonViewCard";
import Checkbox from "@/components/Checkbox";
import Divider from "@/components/Divider";
import { useAppDispatch, useAppSelector } from "@/hooks/ReduxHooks";
import items from "@/lib/items-data.json";
import { resetCart, selectItem } from "@/Services/reducers/cartReducer";
import {
  getRestaurantDetails,
  reset,
} from "@/Services/reducers/restaurantDetails";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { StackParamList } from "./HomeNavigator";

type Props = NativeStackScreenProps<StackParamList, "details">;

const RestaurantDetails = ({ route, navigation }: Props) => {
  const { data } = useAppSelector((s) => s.restaurantDetails);
  const { cart } = useAppSelector((s) => s.cart);
  const dispatch = useAppDispatch();

  function handleNavigateToCart() {
    navigation.push("cart");
  }

  useEffect(() => {
    if (route?.params?.id) {
      dispatch(getRestaurantDetails(route.params.id || ""));
    } else {
      navigation.goBack();
    }

    return () => {
      dispatch(reset());
      dispatch(resetCart());
    };
  }, [route?.params?.id]);

  return (
    <>
      <ScrollView
        style={{ gap: 20, backgroundColor: "#eee" }}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={{ uri: data?.image_url }}
          alt={data?.name}
          style={{
            height: 270,
            width: "100%",
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          }}
        />
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={styles.title}>{data?.name}</Text>
          <View style={styles.headline}>
            <Text style={styles.heading_categories}>
              {data?.categories.map((a) => a.title).join(" . ")}
              <AntDesign name="star" color="#eee751" size={20} />
              {data?.rating} ({data?.review_count}+)
            </Text>
          </View>
          <Divider variant="horizontal" />
          <View style={styles.wrap_items}>
            {items.data.map((item) => (
              <View key={item.id} style={styles.item}>
                <View style={styles.wrap_title}>
                  <Checkbox
                    checked={cart.includes(item.id)}
                    onChange={() => {
                      dispatch(selectItem(item.id));
                    }}
                  />
                  <View>
                    <Text style={styles.item_title}>{item.name}</Text>
                    <Text style={styles.item_price}>${item.price}</Text>
                  </View>
                </View>
                <Image
                  source={{ uri: item.image_url }}
                  alt={item.name}
                  style={{
                    height: 80,
                    width: 80,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                  }}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      {cart.length ? (
        <ButtonViewCard onPress={() => handleNavigateToCart()} />
      ) : null}
    </>
  );
};

export default RestaurantDetails;

const styles = StyleSheet.create({
  bgImg: {
    height: 190,
    width: "100%",
  },
  headline: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    flexWrap: "wrap",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  heading_categories: {
    fontSize: 14,
    fontWeight: "500",
    marginVertical: 10,
  },
  rate: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  wrap_items: {
    gap: 10,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 80,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  wrap_title: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
  },
  item_title: {
    fontSize: 14,
    fontWeight: "500",
  },
  item_price: {
    fontSize: 14,
    fontWeight: "400",
  },
});
