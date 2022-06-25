import { View, Text, StyleSheet } from "react-native";
import { MenuItems } from "../data/MenuItems";
import MenuItem from "./MenuItem";
// create a component
function MenuList() {
  return (
    <View style={styles.container}>
      {MenuItems.map((item) => (
        <View key={item.id}>
          <MenuItem item={item} />
        </View>
      ))}
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    marginBottom: 90,
  },
});

//make this component available to the app
export default MenuList;
