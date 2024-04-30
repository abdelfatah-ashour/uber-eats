import { useAppDispatch } from "@/hooks/ReduxHooks";
import { GOOGLE_MAP_API_KEY } from "@/lib/config";
import { setLocation } from "@/Services/reducers/searchLocation";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

const SearchBar = () => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.search_bar}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          dispatch(setLocation(data.description.split(",")[0]));
        }}
        query={{
          key: GOOGLE_MAP_API_KEY,
          language: "en",
        }}
        onFail={(error) => {
          console.log("🚀 ~ SearchBar ~ error:", error);
        }}
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 10,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.search_right_text_box}>
            <AntDesign name="clockcircle" size={12} />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  search_bar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  search_right_text_box: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    columnGap: 4,
    padding: 10,
    marginRight: 10,
  },
  search_right_text: {},
});
