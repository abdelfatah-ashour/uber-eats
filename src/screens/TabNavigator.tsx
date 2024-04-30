import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useAppSelector } from "@/hooks/ReduxHooks";
import "@/lib/firebase";
import AccountScreen from "@/screens/AccountScreen";
import FavoritesScreen from "@/screens/FavoritesScreen";
import HomeNavigator from "@/screens/HomeNavigator";
import OrdersScreen from "@/screens/OrdersScreen";
import { StackTabs } from "App";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeIcon from "react-native-vector-icons/Octicons";

const Tab = createBottomTabNavigator<StackTabs>();

const TabNavigator = () => {
  const scrollUp = useAppSelector((s) => s.scrollUp).current;

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            width: "80%",
            marginRight: "10%",
            marginLeft: "10%",
            bottom: 20,
            borderRadius: 20,
            justifyContent: "center",
            padding: 0,
            height: 70,
            position: "absolute",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
            backgroundColor: scrollUp ? "#fff" : "rgba(255, 255, 255, 0.7)",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarShowLabel: false,
            tabBarIcon({ focused }) {
              return (
                <View style={{ alignItems: "center" }}>
                  <HomeIcon
                    name="home"
                    size={24}
                    color={focused ? "#000" : "#888"}
                  />
                  <Text style={{ fontSize: 12, fontWeight: "500" }}>Home</Text>
                </View>
              );
            },
            tabBarItemStyle: {
              height: 70,
            },
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={FavoritesScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon({ focused }) {
              return (
                <View style={{ alignItems: "center" }}>
                  <MaterialCommunityIcons
                    name="heart-outline"
                    size={24}
                    color={focused ? "#000" : "#888"}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "500",
                      color: focused ? "#000" : "#888",
                    }}
                  >
                    Favorite
                  </Text>
                </View>
              );
            },
            tabBarItemStyle: {
              height: 70,
            },
          }}
        />

        <Tab.Screen
          name="Orders"
          component={OrdersScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon({ focused }) {
              return (
                <View style={{ alignItems: "center" }}>
                  <FontAwesome5
                    name="clipboard-list"
                    size={24}
                    color={focused ? "#000" : "#888"}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "500",
                      color: focused ? "#000" : "#888",
                    }}
                  >
                    Orders
                  </Text>
                </View>
              );
            },
            tabBarItemStyle: {
              height: 70,
            },
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon({ focused }) {
              return (
                <View style={{ alignItems: "center" }}>
                  <FontAwesome
                    name="user-o"
                    size={24}
                    color={focused ? "#000" : "#888"}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "500",
                      color: focused ? "#000" : "#888",
                    }}
                  >
                    Account
                  </Text>
                </View>
              );
            },
            tabBarItemStyle: {
              height: 70,
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
