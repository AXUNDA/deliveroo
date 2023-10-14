import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

export default function Filter() {
  return (
    <View style={styles.container}>
      <Text>filter</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.lightGrey,
  },
});
