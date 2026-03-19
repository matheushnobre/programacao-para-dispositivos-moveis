import { Stack } from "expo-router";
import { Text, View, ScrollView, StyleSheet, Pressable } from "react-native";
import CardPostList from "./components/cardPostList/cardPostList";
import SearchInput from "./components/searchInput/searchInput";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <ScrollView>
        <View style={styles.container}>
          <SearchInput />
          <CardPostList />
        </View>
      </ScrollView>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40
  }
});
