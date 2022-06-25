import { View, Text, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TitleText from "./TitleText";
import RenderAdvantageList from "./RenderAdvantageList";

const data = [
  {
    id: 1,
    text: "Fast & Reliable (12)",
  },
  {
    id: 2,
    text: "Well packed (11)",
  },
  {
    id: 3,
    text: "Follow order notes (11)",
  },
];
// create a component
function AdvantageList() {
  return (
    <View style={styles.container}>
      <View style={styles.advantageContainer}>
        <Ionicons
          name="reader-outline"
          size={16}
          color="green"
          style={styles.icon}
        />
        <TitleText style={styles.textContainer} textstyle={styles.text}>
          People say...
        </TitleText>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={(item) => <RenderAdvantageList itemData={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 5,
  },
  textContainer: {
    marginVertical: 0,
    paddingHorizontal: 0,
  },
  text: {
    fontSize: 14,
    color: "#a3a2a2",
  },
  advantageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  listContainer: {
    marginVertical: 16,
    flex: 1,
  },
});

export default AdvantageList;
