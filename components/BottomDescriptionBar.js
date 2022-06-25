import { View, Text, StyleSheet } from "react-native";

// create a component
function BottomDescriptionBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {"$15.00 away from a $0.00 delivery fee."}
      </Text>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "6%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    width: "100%",
    borderTopColor: "#e6e5e3",
    borderTopWidth: 2,
  },
  text: {
    color: "#0A7241",
    fontSize: 14,
    fontWeight: "800",
  },
});

//make this component available to the app
export default BottomDescriptionBar;
