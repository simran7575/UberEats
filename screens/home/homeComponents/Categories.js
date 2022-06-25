import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import CategoriesData from "../../../data/CategoriesData";
import CategoryItem from "./CategoryItem";

// create a component
function Categories() {
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={CategoriesData}
      renderItem={(item) => <CategoryItem itemData={item.item} />}
      keyExtractor={(item, index) => item.id}
    />
  );
}

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default Categories;
