import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ProductList from "./src/components/ProductList";

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProductList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});

export default App;
