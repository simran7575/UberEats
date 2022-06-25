import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import DetailContainer from "./DetailContainer";

// create a component
//{ id, url, title, description, rating, duration, units }
function CardItem({ data, star }) {
  const navigation = useNavigation();

  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={() => navigation.navigate("DetailScreen")}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: data.url }} style={styles.image} />
        </View>

        <Text style={styles.titleText}>{data.title}</Text>
        <View style={styles.sponsorContainer}>
          <Text>Sponsored</Text>
          <Ionicons
            name="information-circle"
            size={15}
            color="gray"
            style={styles.icon}
          />
        </View>
        <Text>{data.description}</Text>
        <DetailContainer
          rating={data.rating}
          duration={data.duration}
          star={star}
          units={data.units}
        />
      </View>
    </Pressable>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    width: Dimensions.get("window").width,
    marginBottom: 28,
  },
  pressed: {
    opacity: 0.7,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    marginVertical: 6,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "500",
  },
  sponsorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  icon: {
    marginHorizontal: 6,
  },
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

//make this component available to the app
export default CardItem;
