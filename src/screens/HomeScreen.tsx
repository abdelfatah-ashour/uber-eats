import CategoriesList from "@/components/CategoriesList";
import HeaderTabs from "@/components/HeaderTabs";
import RestaurantCard from "@/components/RestaurantCard";
import SearchBar from "@/components/SearchBar";
import { StatusBarHeight } from "@/helper/dimensions";
import { useAppDispatch, useAppSelector } from "@/hooks/ReduxHooks";
import { YELP_API_KEY } from "@/lib/config";
import { IRestaurantModel } from "@/Models/RestaurantModel";
import { setRestaurant } from "@/Services/reducers/cartReducer";
import { setIsScrollUp } from "@/Services/reducers/isScrollUp";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import LottieView from "lottie-react-native";
import React, { useCallback, useEffect, useState } from "react";
import { RefreshControl, ScrollView, StyleSheet, View } from "react-native";
import { StackParamList } from "./HomeNavigator";

const STATUSBAR_HEIGHT = StatusBarHeight;

type Props = NativeStackScreenProps<StackParamList, "default">;

export default function HomeScreen({ navigation }: Props) {
  const [restaurants, setRestaurants] = useState<IRestaurantModel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const { location } = useAppSelector((s) => s.location);
  const { tab } = useAppSelector((s) => s.currentTab);
  const [scroll, setScroll] = useState<number>(0);
  const dispatch = useAppDispatch();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const fetchBusinesses = useCallback(
    async (locationVal: string) => {
      setLoading(true);
      return await fetch(
        `https://api.yelp.com/v3/businesses/search?term=restaurant&location=${locationVal}&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${YELP_API_KEY}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setRestaurants(data?.businesses || []);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [location]
  );

  useEffect(() => {
    fetchBusinesses(location);

    return () => {
      dispatch(setIsScrollUp(true));
    };
  }, [location]);

  return (
    <View style={styles.bar}>
      <View
        style={[
          styles.header_container,
          {
            paddingTop: STATUSBAR_HEIGHT,
          },
        ]}
      >
        <HeaderTabs />
        <SearchBar />
      </View>
      {!loading ? (
        <ScrollView
          style={styles.container_restaurant}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          onScroll={(nativeEvent) => {
            let currentY = nativeEvent.nativeEvent.contentOffset.y;
            setScroll(currentY);

            if (!currentY) {
              dispatch(setIsScrollUp(false));
            }

            if (currentY < scroll) {
              dispatch(setIsScrollUp(true));
            } else {
              dispatch(setIsScrollUp(false));
            }
          }}
          scrollEventThrottle={60}
        >
          <CategoriesList />
          {restaurants
            .filter((s) => s.transactions.includes(tab.toLowerCase()))
            .map((item) => (
              <RestaurantCard
                item={item}
                key={item.id}
                handlePress={(id) => {
                  dispatch(setRestaurant(item));
                  navigation.navigate("details", { id });
                }}
              />
            ))}
        </ScrollView>
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
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flex: 1,
  },
  header_container: {
    backgroundColor: "#fff",
    paddingVertical: 15,
  },
  container_restaurant: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    marginTop: 10,
    flex: 1,
  },
});
