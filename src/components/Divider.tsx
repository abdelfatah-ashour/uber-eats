import React from "react";
import { StyleSheet, View } from "react-native";

type props = {
  variant: "horizontal" | "vertical";
};

const Divider = ({ variant }: props) => {
  return <View style={[styles[variant]]}></View>;
};

export default Divider;

const styles = StyleSheet.create({
  horizontal: {
    width: "100%",
    height: 2,
    backgroundColor: "#eee",
  },
  vertical: {
    height: "100%",
    width: 2,
    backgroundColor: "#eee",
  },
});
