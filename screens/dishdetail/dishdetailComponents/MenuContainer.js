import { View, Text, StyleSheet } from "react-native";
import MenuSearch from "./MenuSearch";
import TitleText from "../../../components/TitleText";
import MenuList from "./MenuList";

// create a component
function MenuContainer() {
  return (
    <View style={styles.container}>
      <MenuSearch />
      <TitleText style={styles.titleText} textstyle={styles.textstyle}>
        Packed for You
      </TitleText>
      <View>
        <MenuList />
      </View>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {},
  titleText: {
    paddingHorizontal: 0,
  },
  textstyle: {
    fontSize: 20,
  },
});

//make this component available to the app
export default MenuContainer;
