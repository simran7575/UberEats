import { View, Text, StyleSheet } from "react-native";

// create a component
function Divider({ style }) {
  return <View style={[styles.container, { ...style }]}>{}</View>;
}

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e6e5e3",
    width: "100%",
    height: 10,
  },
});

//make this component available to the app
export default Divider;
