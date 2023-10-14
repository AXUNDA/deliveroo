import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { TextInput } from "react-native-gesture-handler";
import Bottom_Sheet from "./BottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const SearchBar = () => (
  <View style={styles.searchContainer}>
    <View style={styles.searchSection}>
      <View style={styles.searchField}>
        <Ionicons name="search-outline" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Restaurants,Groceries,dishes"
        />
      </View>
      <Link href={"/(modal)/filter"} asChild>
        <TouchableOpacity style={styles.optionsButton}>
          <Ionicons name="options-outline" size={24} color={Colors.primary} />
        </TouchableOpacity>
      </Link>
    </View>
  </View>
);

const CustomHeader = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  function openModal() {
    console.log("open sesame");
    bottomSheetRef.current?.present();
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Bottom_Sheet ref={bottomSheetRef} />

      <View style={styles.container}>
        <TouchableOpacity onPress={openModal}>
          <Image
            style={styles.bike}
            source={require("../assets/images/bike.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.titleContainer} onPress={openModal}>
          <Text style={styles.title}>Delivery • now</Text>
          <View style={styles.location}>
            <Text style={styles.subTitle}>London</Text>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color={Colors.primary}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="person-outline"
            size={24}
            color={Colors.primary}
            style={styles.profileButton}
          />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bike: {
    width: 30,
    height: 30,
  },
  titleContainer: {
    flex: 1,
  },
  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 14,
    borderRadius: 50,
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchContainer: {
    height: 60,
    backgroundColor: "#fff",
  },
  searchField: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
  },
  optionsButton: {
    padding: 10,
    borderRadius: 50,
  },
  searchSection: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  input: {
    padding: 10,
    color: Colors.mediumDark,
  },
  searchIcon: {},
});

export default CustomHeader;
