import { useAppDispatch, useAppSelector } from "@/hooks/ReduxHooks";
import { setCurrentTab } from "@/Services/reducers/currentScreen";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type TabsType = "DELIVERY" | "PICKUP";

const HeaderTabs = () => {
  const { tab } = useAppSelector((s) => s.currentTab);
  const dispatch = useAppDispatch();

  function onSelectTab(tab: TabsType) {
    dispatch(setCurrentTab(tab));
  }

  return (
    <View style={styles.tabs_container}>
      <TouchableOpacity
        style={[styles.btn, tab === "DELIVERY" && styles.btn_active]}
        onPress={() => onSelectTab("DELIVERY")}
      >
        <Text style={[styles.text, tab === "DELIVERY" && styles.text_active]}>
          Delivery
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, tab === "PICKUP" && styles.btn_active]}
        onPress={() => onSelectTab("PICKUP")}
      >
        <Text style={[styles.text, tab === "PICKUP" && styles.text_active]}>
          Pickup
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderTabs;

const styles = StyleSheet.create({
  tabs_container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    columnGap: 6,
  },
  btn: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    color: "#111",
    fontWeight: "900",
    fontSize: 14,
  },
  text_active: {
    color: "#fff",
  },
  btn_active: {
    backgroundColor: "#111",
  },
});
