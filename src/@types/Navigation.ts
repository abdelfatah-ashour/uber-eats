import { NativeStackNavigationProp } from "@react-navigation/native-stack";
export type StackTabs = {
  Home: undefined;
  Favorite: undefined;
  Orders: undefined;
  Account: undefined;
};

export type TabNavigationType = NativeStackNavigationProp<StackTabs>;
