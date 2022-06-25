import { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import RenderCarousel from "./homeComponents/RenderCarousel";
import Headers from "./homeComponents/Headers";
import LocationSelect from "./homeComponents/LocationSelect";
import Divider from "../../components/Divider";
import Categories from "./homeComponents/Categories";
import {
  FavouriteMealData,
  MoreToExploreData,
  PopularNearYouData,
} from "../../data/FavouriteMealData";
import CardList from "./homeComponents/CardList";
import TitleText from "../../components/TitleText";

// create a component
function Home() {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <ScrollView
      style={styles.rootContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.headers}>
          <Headers active={activeTab == "Delivery"} onPress={setActiveTab}>
            Delivery
          </Headers>
          <Headers active={activeTab == "Pickup"} onPress={setActiveTab}>
            Pickup
          </Headers>
          <Headers active={activeTab == "Dine-In"} onPress={setActiveTab}>
            Dine-In
          </Headers>
        </View>

        <LocationSelect />
        <View style={styles.carousel}>
          <RenderCarousel />
        </View>
        <Divider />
        <View style={styles.categories}>
          <Categories />
        </View>
        <Divider />
        <View style={styles.cardList}>
          <CardList data={FavouriteMealData} />
        </View>
        <Divider />
        <TitleText>More to explore</TitleText>
        <View style={styles.cardList}>
          <CardList data={MoreToExploreData} star={true} />
        </View>
        <Divider />
        <TitleText>Popular Near You</TitleText>
        <View style={styles.cardList}>
          <CardList data={PopularNearYouData} star={true} />
        </View>
      </View>
    </ScrollView>
  );
}

// define your styles
const styles = StyleSheet.create({
  rootContainer: {
    // flex: 1,
    marginBottom: 70,
  },
  container: {
    marginTop: 40,
    flex: 1,
  },
  headers: {
    flexDirection: "row",
    marginVertical: 6,
    justifyContent: "center",
  },
  carousel: {
    marginVertical: 12,
    width: "100%",
  },
  categories: {
    marginVertical: 12,
  },
  cardList: {
    marginVertical: 12,
  },
});

//make this component available to the app
export default Home;
