import { View, Text, StyleSheet } from "react-native";

// create a component
function TitleText({ children, style, textstyle }) {
  return (
    <View style={[styles.container, { ...style }]}>
      <Text style={[styles.text, { ...textstyle }]}>{children}</Text>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 18,
    paddingHorizontal: 18,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

//make this component available to the app
export default TitleText;
