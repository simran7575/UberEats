import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// create a component
function LocationSelect() {
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <View style={styles.location}>
          <Ionicons name="location" color="black" size={25} />
          <Text style={styles.locationText}>New York</Text>
        </View>
        <View style={styles.timeContainer}>
          <Ionicons name="time" color="black" size={25} />
          <Text style={styles.locationText}>Now</Text>
          <Ionicons name="chevron-down" color="black" size={25} />
        </View>
      </View>
      <View style={styles.filterContainer}>
        <Ionicons name="options" color="black" size={25} />
      </View>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },
  locationContainer: {
    flex: 7,
    flexDirection: "row",
    backgroundColor: "#e6e5e3",
    justifyContent: "space-between",
    borderRadius: 24,
    paddingLeft: 8,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  filterContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
  },
  locationText: {
    fontSize: 16,
    fontWeight: "900",
    marginHorizontal: 5,
  },
});

//make this component available to the app
export default LocationSelect;
