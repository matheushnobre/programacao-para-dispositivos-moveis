import { Stack } from "expo-router";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Cantinho do Professor",
          headerStyle: {backgroundColor: '#473469'},
          headerTintColor: '#fff',
          headerTitleAlign: 'left',
          headerRight: () => (
            <Pressable style={{marginRight:15}}>
              <Ionicons name="person-circle-outline" size={32} color='#ffffff' />
            </Pressable>
          )
        }}
      />
    </Stack>
  );
}
