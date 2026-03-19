import { Text, View, ScrollView, StyleSheet } from "react-native";
import CardPostList from "./components/cardPostList/cardPostList";
import SearchInput from "./components/searchInput/searchInput";

export default function App() {
  return (
    <ScrollView>
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
  }
});
