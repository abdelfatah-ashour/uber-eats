import { TabNavigationType } from "@/@types/Navigation";
import { useAppDispatch, useAppSelector } from "@/hooks/ReduxHooks";
import useWithAuth from "@/hooks/useWithAuth";
import { db } from "@/lib/firebase";
import { IRestaurantModel } from "@/Models/RestaurantModel";
import {
  addFavorite,
  removeFavorite,
} from "@/Services/reducers/favoritesReducer";
import { useNavigation } from "@react-navigation/native";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import React, { useMemo } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const RestaurantCard = ({
  item,
  handlePress,
}: {
  item: IRestaurantModel;
  handlePress: (id: string) => void;
}) => {
  const { favorites } = useAppSelector((s) => s.favorites);
  const favoritesCollection = collection(db, "Favorites");
  const dispatch = useAppDispatch();
  const { checkIsAuth } = useWithAuth();

  const { navigate } = useNavigation<TabNavigationType>();

  const isIncluded = useMemo(() => {
    return favorites.find((s) => s.id === item.id) ? true : false;
  }, [favorites.length]);

  async function addFavoriteItem(food: IRestaurantModel) {
    await addDoc(favoritesCollection, food);
    dispatch(addFavorite(food));
  }

  async function removeFavoriteItem(id: string) {
    try {
      const foodRef = doc(db, "Favorites", id, "id", id);
      await deleteDoc(foodRef);
      dispatch(removeFavorite(id));
    } catch (error) {
      console.error("🚀 ~ removeFavoriteItem ~ error:", error);
    }
  }

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={(e) => {
        e.preventDefault();
        handlePress(item.id);
      }}
    >
      <View>
        <Image
          source={{
            uri: item.image_url,
          }}
          style={{
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            width: "100%",
            minHeight: 180,
            maxHeight: "auto",
          }}
        />

        <TouchableOpacity
          onPress={(e) => {
            e.stopPropagation();
            checkIsAuth(
              () => {
                if (!isIncluded) {
                  addFavoriteItem(item);
                } else {
                  removeFavoriteItem(item.id);
                }
              },
              () => {
                navigate("Account");
              }
            );
          }}
          style={styles.card_fav}
        >
          {isIncluded ? (
            <MaterialCommunityIcons name={"heart"} size={32} color={"red"} />
          ) : (
            <MaterialCommunityIcons
              name={"heart-outline"}
              size={32}
              color={"white"}
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.card_content}>
        <View style={styles.card_description}>
          <Text style={styles.card_title}>{item.name}</Text>
          <Text>{item.distance.toFixed(0)} m</Text>
        </View>
        <View style={styles.card_count}>
          <Text style={styles.card_count_text}>{item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    gap: 5,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#eee",
    borderStyle: "solid",
  },
  card_header: {
    position: "relative",
  },
  card_img: {
    width: "100%",
    height: 180,
    zIndex: 1,
    resizeMode: "cover",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  card_fav: {
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 2,
    padding: 10,
  },
  card_content: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  card_description: {
    flex: 1,
    gap: 5,
  },
  card_count: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  card_count_text: {
    fontWeight: "500",
    color: "#000",
  },
  card_title: {
    fontSize: 15,
    fontWeight: "700",
    padding: 0,
  },
});
