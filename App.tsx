import useSession from "@/hooks/useSession";
import "@/lib/firebase";
import { store } from "@/Services/store";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";

import TabNavigator from "@/screens/TabNavigator";
import { useEffect } from "react";

export type StackTabs = {
  Home: undefined;
  Favorite: undefined;
  Orders: undefined;
  Account: undefined;
};

export default function App() {
  const { user, setUserInfo } = useSession();
  useEffect(() => {
    if (!user) {
      setUserInfo();
    }
  }, []);

  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
