import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function DetailContainer({ rating, duration, star, units }) {
  const addRating = <Ionicons name="star" color="#ebc507" size={14} />;
  return (
    <View style={styles.detailContainer}>
      <Ionicons
        name="hourglass-outline"
        size={16}
        color="green"
        style={styles.detailText}
      />
      <Text style={styles.detailText}>{rating}</Text>
      <Text style={styles.detailText}>
        {duration} {star && addRating} {units}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    marginVertical: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  detailText: {
    marginRight: 8,
    backgroundColor: "#e6e5e3",
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
});

export default DetailContainer;
