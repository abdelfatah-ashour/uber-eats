import { useAppSelector } from "@/hooks/ReduxHooks";
import items from "@/lib/items-data.json";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";

type ButtonViewCardProps = {
  onPress: () => void;
};

const ButtonViewCard = (props: TouchableHighlightProps) => {
  const { cart } = useAppSelector((s) => s.cart);

  return (
    <TouchableHighlight {...props} style={styles.button}>
      <View
        style={[
          styles.wrap_title,
          { justifyContent: "space-between", paddingHorizontal: 20 },
        ]}
      >
        <Feather name="shopping-cart" color="#fff" size={18} />
        <View
          style={[
            styles.wrap_title,
            {
              justifyContent: "space-between",
              flexGrow: 1,
            },
          ]}
        >
          <Text style={styles.title}>View Card</Text>
          <Text style={{ color: "#fff", fontSize: 20 }}>
            $
            {items.data
              .filter((item) => cart.includes(item.id))
              .map((s) => s.price)
              .reduce((a, b) => a + b, 0)
              .toFixed(2)}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ButtonViewCard;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "#000",
    width: "60%",
    paddingVertical: 12.5,
    justifyContent: "center",
    borderRadius: 30,
  },
  wrap_title: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    color: "#fff",
    textTransform: "capitalize",
    fontWeight: "400",
    textAlign: "center",
  },
});
