import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState, useEffect } from "react";
import Colors from "../../constants/Colors";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
import { FlatList } from "react-native";
import categories from "../../assets/data/filter.json";
import { ListRenderItem } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface Category {
  name: string;
  count: number;
  checked?: boolean;
}

const ItemBox = () => (
  <View
    style={{
      marginTop: 10,
    }}
  >
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

      <TouchableOpacity style={styles.item}>
        <MaterialCommunityIcons
          name="silverware-fork-knife"
          size={24}
          color={Colors.medium}
        />
        <Text style={{ flex: 1 }}> Hygiene Rating</Text>
        <Entypo name="chevron-small-right" size={28} color={Colors.primary} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <AntDesign name="tagso" size={24} color={Colors.medium} />
        <Text style={{ flex: 1 }}> Offers</Text>
        <Entypo name="chevron-small-right" size={28} color={Colors.primary} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <MaterialCommunityIcons
          name="food-turkey"
          size={24}
          color={Colors.medium}
        />
        <Text style={{ flex: 1 }}> Dietary</Text>
        <Entypo name="chevron-small-right" size={28} color={Colors.primary} />
      </TouchableOpacity>
    </View>
    <Text style={styles.header}>Categories</Text>
  </View>
);

export default function Filter() {
  const navigation = useNavigation();
  const [items, setItems] = useState<Category[]>(categories);
  const [selected, setSelected] = useState<Category[]>([]);
  const [isSelected, setIsSelected] = useState(false);

  const flexWidth = useSharedValue(0);
  const scale = useSharedValue(0);

  useEffect(() => {
    const hasSelected = selected.length > 0;
    const selectedItems = items.filter((item) => item.checked);
    if (selectedItems.length > 0) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
    const newSelected = selectedItems.length > 0;
    if (hasSelected !== newSelected) {
      flexWidth.value = newSelected ? 150 : 0;
    }
    setSelected(selectedItems);
  }, [items]);

  const clearAll = () => {
    const update = items.map((item) => {
      item.checked = false;
      return item;
    });

    setItems(update);
  };

  // const animatedStyle = useAnimatedStyle(() => {
  //   return {
  //     width: flexWidth.value,
  //   };
  // });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: flexWidth.value,
      opacity: flexWidth.value > 0 ? 1 : 0,
    };
  });

  const animatedText = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const renderItem: ListRenderItem<Category> = ({ item, index }) => (
    <View style={styles.row}>
      <Text style={styles.itemText}>
        {item.name} ({item.count})
      </Text>
      <Checkbox
        // fillColor={Colors.primary}
        // unfillColor="#fff"
        // disableBuiltInState
        // iconStyle={{
        //   borderColor: Colors.primary,
        //   borderRadius: 4,
        //   borderWidth: 2,
        // }}
        // innerIconStyle={{
        //   borderColor: Colors.primary,
        //   borderRadius: 4,
        //   borderWidth: 2,
        // }}
        color={Colors.primary}
        style={{
          height: 25,
          width: 25,
        }}
        value={items[index].checked}
        onValueChange={() => {
          const isChecked = items[index].checked;

          const updatedItems = items.map((item) => {
            if (item.name == items[index].name) {
              item.checked = !isChecked;
            }

            return item;
          });

          setItems(updatedItems);
        }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.clearButton} onPress={() => clearAll()}>
        <Text style={styles.buttonText}>Clear all</Text>
        <MaterialIcons name="clear-all" size={24} color="#fff" />
      </TouchableOpacity> */}
      <FlatList
        data={items}
        renderItem={renderItem}
        ListHeaderComponent={<ItemBox />}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      />
      <View style={{ height: 90 }} />

      <View style={styles.footerStyles}>
        <View style={styles.btnContainer}>
          {isSelected && (
            <TouchableOpacity
              onPress={() => clearAll()}
              style={styles.outlineButton}
            >
              <Text style={styles.outlineButtonText}>Clear</Text>
              <MaterialIcons
                name="clear-all"
                size={24}
                color={Colors.primary}
              />
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={styles.fullButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: "center",
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
    flex: 1,
  },
  clearButton: {
    backgroundColor: Colors.primary,
    padding: 10,

    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  itemText: {
    flex: 1,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "center",
  },
  outlineButton: {
    borderColor: Colors.primary,
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    height: 56,
    flexDirection: "row",
    flex: 1,
  },
  outlineButtonText: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 16,
  },
});
