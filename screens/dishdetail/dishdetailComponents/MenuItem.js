import { View, Text, StyleSheet } from "react-native";
import TitleText from "../../../components/TitleText";

// create a component
function MenuItem({ item }) {
  return (
    <View style={styles.container}>
      <TitleText style={styles.titleTextContainer} textstyle={styles.titleText}>
        {item.name}
      </TitleText>
      <View style={styles.descriptionContainer}>
        <Text>{item.description}</Text>
      </View>
      <View>
        <Text>{item.price}</Text>
      </View>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  titleTextContainer: {
    paddingHorizontal: 0,
    marginVertical: 0,
  },
  titleText: {
    fontSize: 17,
    fontWeight: "800",
  },
  descriptionContainer: {
    marginVertical: 12,
  },
});

//make this component available to the app
export default MenuItem;
