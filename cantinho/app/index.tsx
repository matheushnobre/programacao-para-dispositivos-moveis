import { Text, View, ScrollView, StyleSheet } from "react-native";
import CardPostList from "./components/cardPostList/cardPostList";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
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
