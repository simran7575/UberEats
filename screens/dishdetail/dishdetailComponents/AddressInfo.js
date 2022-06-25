import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// create a component
function AddressInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Ionicons
          name="location-sharp"
          size={16}
          color="#5c5b5b"
          style={styles.icon}
        />
        <Text style={styles.text}>
          {" 38 Park Row Frnt 4, New York, NY 1003"}
        </Text>
      </View>
      <View style={styles.infoTextContainer}>
        <Text style={styles.infoText}>More</Text>
        <Text style={styles.infoText}>Info</Text>
      </View>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 12,
    justifyContent: "space-between",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
  text: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#5c5b5b",
  },
  infoTextContainer: {
    marginRight: 12,
  },
  infoText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "green",
  },
});

//make this component available to the app
export default AddressInfo;
