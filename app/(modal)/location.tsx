import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MapView from "react-native-maps";
import Colors from "../../constants/Colors";
import { useNavigation } from "expo-router";

const Location_search = () => {
  const navigation = useNavigation();
  const [region, setRegion] = useState({
    latitude: 4.77149,
    longitude: 7.01435,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  });
  return (
    <View style={styles.container}>
      <MapView
        mapType="standard"
        showsUserLocation={true}
        style={styles.map}
        region={region}
      />
      <View style={styles.absoluteBox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,

    alignItems: "center",
    borderRadius: 16,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  absoluteBox: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
  },
});

export default Location_search;
