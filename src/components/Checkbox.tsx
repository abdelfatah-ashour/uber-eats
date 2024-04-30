import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

type CheckboxProps = {
  checked: boolean;
  onChange: (isChecked: boolean) => void;
};

const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  return (
    <Pressable
      style={[styles.checkbox, checked ? styles.checked : styles.un_checked]}
      onPress={() => onChange(!checked)}
    >
      {<Ionicons name="checkmark" size={24} color="white" />}
    </Pressable>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  checkbox: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    backgroundColor: "green",
    borderColor: "green",
  },
  un_checked: {
    borderColor: "grey",
    backgroundColor: "white",
  },
});
