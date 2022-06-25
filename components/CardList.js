import { View, Text, StyleSheet, FlatList } from "react-native";
import CardItem from "./CardItem";

// create a component
function CardList({ data, star }) {
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={(item) => <CardItem data={item.item} star={star} />}
    />
  );
}

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default CardList;
