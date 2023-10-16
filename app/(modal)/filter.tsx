import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
import { FlatList } from "react-native";
import categories from "../../assets/data/filter.json";
import { ListRenderItem } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

interface Category {
  name: string;
  count: number;
  checked?: boolean;
}

const renderItem: ListRenderItem<Category> = ({ item }) => (
  <Text>{item.name}</Text>
);

const ItemBox = () => (
  <>
    <View style={styles.itemContainer}>
      <TouchableOpacity style={styles.item}>
        <Ionicons
          name="ios-arrow-down-outline"
          size={24}
          color={Colors.medium}
        />
        <Text style={{ flex: 1 }}> Sort</Text>
        <Entypo name="chevron-small-right" size={28} color={Colors.primary} />
      </TouchableOpacity>
    </View>
    <Text style={styles.header}>Categories</Text>
  </>
);

export default function Filter() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        ListHeaderComponent={<ItemBox />}
      />
      <View style={styles.footerStyles}>
        <TouchableOpacity
          style={styles.fullButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.lightGrey,
  },
  footerStyles: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: "#fff",
    padding: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -10,
    },
  },
  fullButton: {
    backgroundColor: Colors.primary,
    padding: 16,

    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#fff",
    paddingVertical: 11,

    borderColor: Colors.grey,
    borderBottomWidth: 1,
    gap: 5,
  },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
