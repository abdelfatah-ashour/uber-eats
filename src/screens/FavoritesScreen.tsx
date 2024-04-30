import RestaurantCard from "@/components/RestaurantCard";
import { useAppDispatch, useAppSelector } from "@/hooks/ReduxHooks";
import { setRestaurant } from "@/Services/reducers/cartReducer";
import { getFavorites } from "@/Services/reducers/favoritesReducer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackTabs } from "App";
import LottieView from "lottie-react-native";
import React, { useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { StackParamList } from "./HomeNavigator";

type Props = NativeStackScreenProps<StackTabs, "Favorite">;
type PropsStack = NativeStackScreenProps<StackParamList>;

const FavoritesScreen = ({ navigation }: Props & PropsStack) => {
  const { favorites, loading } = useAppSelector((s) => s.favorites);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loading ? (
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
      ) : (
        <>
          {favorites.length ? (
            <FlatList
              contentContainerStyle={{ paddingHorizontal: 10, gap: 10 }}
              data={favorites}
              renderItem={({ item }) => (
                <RestaurantCard
                  item={item}
                  key={item.id}
                  handlePress={(id) => {
                    dispatch(setRestaurant(item));
                    navigation.navigate("details", { id });
                  }}
                />
              )}
              keyExtractor={({ id }) => id}
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
      )}
    </SafeAreaView>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({});
