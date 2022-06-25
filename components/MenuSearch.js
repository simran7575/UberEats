import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// create a component
function MenuSearch() {
  return (
    <View style={styles.container}>
      <Text>Menu</Text>
      <Ionicons name="search" size={24} color="black" />
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
});

//make this component available to the app
export default MenuSearch;
