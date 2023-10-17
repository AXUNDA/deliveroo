import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import React, { useMemo, forwardRef, useCallback } from "react";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetBackdrop,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import Colors from "../constants/Colors";
import { Link } from "expo-router";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

type ref = BottomSheetModal;

const Bottom_Sheet = forwardRef<BottomSheetModal>((props, ref) => {
  const snapPoints = useMemo(() => ["50%"], []);
  const renderBackDrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );
  const { dismiss } = useBottomSheetModal();
  return (
    <BottomSheetModal
      handleIndicatorStyle={{ display: "none" }}
      backgroundStyle={{ borderRadius: 0, backgroundColor: Colors.lightGrey }}
      ref={ref}
      snapPoints={snapPoints}
      overDragResistanceFactor={0}
      animateOnMount={true}
      backdropComponent={renderBackDrop}
    >
      <View style={styles.containerStyle}>
        <View style={styles.toggle}>
          <TouchableOpacity style={styles.toggleActive}>
            <Text style={styles.activeText}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleInactive}>
            <Text style={styles.inactiveText}>Pickup</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subHeading}>Your location</Text>
        <Link href={"/(modal)/location"} asChild onPress={() => dismiss()}>
          <TouchableOpacity>
            <View style={styles.item}>
              <EvilIcons name="location" size={24} color="black" />
              <Text style={{ flex: 1 }}> Current location</Text>
              <Entypo name="chevron-small-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </Link>
        <Text style={styles.subHeading}>Now</Text>
        <Link href={"/"} asChild>
          <TouchableOpacity>
            <View style={styles.item}>
              <EvilIcons name="clock" size={24} color="black" />
              <Text style={{ flex: 1 }}> Current location</Text>
              <Entypo name="chevron-small-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </Link>
        <TouchableOpacity onPress={() => dismiss()} style={styles.button}>
          <Text style={styles.buttonText}>confirm</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    margin: 16,
    borderRadius: 4,
  },
  bottomSheet: {
    backgroundColor: Colors.lightGrey,
    borderRadius: 0,
  },
  containerStyle: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  toggleActive: {
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 32,
  },
  toggleInactive: {
    // backgroundColor: Colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 32,
  },
  activeText: {
    color: "#fff",
    fontWeight: "bold",
  },
  inactiveText: {
    color: Colors.primary,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: "800",
    margin: 16,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#fff",
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.lightGrey,
  },
});

export default Bottom_Sheet;
