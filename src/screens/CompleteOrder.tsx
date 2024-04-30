import LottieView from "lottie-react-native";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const CompleteOrder = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "space-between",
        paddingVertical: 20,
      }}
    >
      <View>
        <LottieView
          source={require("../../assets/animations/check-mark.json")}
          style={{ width: "100%", height: 170, marginVertical: 40 }}
          autoPlay
          loop={false}
        />
        <Text style={{ fontSize: 18, fontWeight: "500", textAlign: "center" }}>
          Your order at Restaurant has been picked for $12.30
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <LottieView
          source={require("../../assets/animations/cooking.json")}
          style={{ width: "100%", height: 400 }}
          autoPlay
          loop
        />
      </View>
    </SafeAreaView>
  );
};

export default CompleteOrder;

const styles = StyleSheet.create({});
