import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MapView from "react-native-maps";
import Colors from "../../constants/Colors";
import { useNavigation } from "expo-router";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const Location_search = () => {
  const navigation = useNavigation();
  const [region, setRegion] = useState({
    latitude: 6.465422,
    longitude: 3.406448,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  });
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: "AIzaSyC2rdnNWLCpxjGCV8c589V4LiQlkeldJAI",
          language: "en",
        }}
      />
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
