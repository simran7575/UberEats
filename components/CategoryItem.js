import { View, Text, StyleSheet, Image } from "react-native";

// create a component
function CategoryItem(props) {
  return (
    <View style={styles.container}>
      <Image source={props.itemData.url} style={styles.image} />
      <Text style={styles.itemText}>{props.itemData.text}</Text>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    marginBottom: 12,
  },
  itemText: {
    fontWeight: "bold",
  },
});

//make this component available to the app
export default CategoryItem;
