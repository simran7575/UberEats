import { View, Text, StyleSheet } from "react-native";

function RenderAdvantageList({ itemData }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{itemData.item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 18,
    backgroundColor: "#C7E6D7",
    marginHorizontal: 8,
  },
  text: {
    color: "#0A7241",
    fontWeight: "800",
  },
});

export default RenderAdvantageList;
