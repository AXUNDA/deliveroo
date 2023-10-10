import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { TextInput } from "react-native-gesture-handler";

const SearchBar = () => (
  <View style={styles.searchContainer}>
    <View style={styles.searchSection}>
      <View style={styles.searchField}>
        <TextInput placeholder="Search" />
      </View>
      <Link href={"/"} asChild={true}>
        <TouchableOpacity style={styles.optionsButton}>
          <Ionicons name="options-outline" size={24} color={Colors.primary} />
        </TouchableOpacity>
      </Link>
    </View>
  </View>
);

const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            style={styles.bike}
            source={require("../assets/images/bike.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.titleContainer}>
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
    padding: 20,
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
});

export default CustomHeader;
