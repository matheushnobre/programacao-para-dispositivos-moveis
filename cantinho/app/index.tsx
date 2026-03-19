import { Stack } from "expo-router";
import { Text, View, ScrollView, StyleSheet, Pressable } from "react-native";
import CardPostList from "./components/cardPostList/cardPostList";
import SearchInput from "./components/searchInput/searchInput";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <ScrollView>

      <Stack.Screen
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

      <View style={styles.container}>
        <SearchInput />
        <CardPostList />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  }
});
