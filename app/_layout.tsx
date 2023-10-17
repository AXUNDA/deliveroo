import { Stack, useNavigation } from "expo-router";
import CustomHeader from "../components/CustomHeader";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Colors from "../constants/Colors";
import { EvilIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function RootLayoutNav() {
  const navigation = useNavigation();
  return (
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            header: () => <CustomHeader />,
          }}
        />
        <Stack.Screen
          name="(modal)/filter"
          options={{
            presentation: "modal",
            headerTitle: "filter",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.lightGrey,
            },
            headerTitleAlign: "center",

            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <EvilIcons name="close" size={40} color={Colors.primary} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="(modal)/location"
          options={{
            presentation: "fullScreenModal",
            headerTitle: "Search",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.lightGrey,
            },
            headerTitleAlign: "center",

            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <EvilIcons name="close" size={40} color={Colors.primary} />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack>
    </BottomSheetModalProvider>
  );
}
