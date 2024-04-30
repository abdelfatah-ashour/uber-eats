import useSession from "@/hooks/useSession";
import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const AccountScreen = () => {
  const { user, deleteUserInfo, setUserInfo } = useSession();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          gap: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={{ uri: user?.profileImage }}
          alt={user?.username}
          style={{ width: 70, height: 70, borderRadius: 50 }}
        />
        <Text>{user?.username}</Text>
        <Text>{user?.email}</Text>
        <Text>{user?.birthDate.toLocaleString()}</Text>
        {user ? (
          <Pressable onPress={deleteUserInfo} style={{ margin: 20 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Logout
            </Text>
          </Pressable>
        ) : (
          <Pressable onPress={setUserInfo} style={{ margin: 20 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Sign in
            </Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
