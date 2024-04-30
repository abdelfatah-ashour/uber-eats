import { categoriesData } from "@/lib/categories-data";
import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const CategoriesList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categoriesData}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.wrap_img}>
              <Image source={item.image} style={styles.img} />
            </View>
            <Text style={styles.label}>{item.label}</Text>
          </View>
        )}
        keyExtractor={(item) => item.label}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categories}
      />
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginVertical: 10,
  },
  categories: {
    gap: 15,
    padding: 10,
  },
  card: {
    alignItems: "center",
  },
  wrap_img: {
    padding: 10,
  },
  img: {
    width: 35,
    height: 50,
    resizeMode: "contain",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
});
