import { useState } from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../components/IconButton";
import TitleText from "../components/TitleText";
import DetailContainer from "../components/DetailContainer";
import Divider from "../components/Divider";
import AddressInfo from "../components/AddressInfo";
import AdvantageList from "../components/AdvantageList";
import DeliveryFee from "../components/DeliveryFee";
import MenuContainer from "../components/MenuContainer";
import BottomDescriptionBar from "../components/BottomDescriptionBar";
// create a component
function MealDetail() {
  const [isLiked, setIsLiked] = useState(false);

  const changeLike = () => {
    setIsLiked(!isLiked);
  };

  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.iconContainers}>
            <IconButton
              name={"arrow-back"}
              size={18}
              color="black"
              backgroundColor={"white"}
              onPress={() => navigation.goBack()}
            />
            <IconButton
              name={isLiked ? "heart" : "heart-outline"}
              size={18}
              color={isLiked ? "red" : "black"}
              backgroundColor={"white"}
              onPress={changeLike}
            />
          </View>
          <View style={styles.mainContainer}>
            <TitleText style={styles.titleText}>
              {"Starbucks (Park Row at Beekman \nSt)"}
            </TitleText>
            <Text style={styles.descriptionText}>
              Cafe - Coffee and Tea - Breakfast and Brunch - Bakery $
            </Text>
            <DetailContainer
              rating={"40-50Min"}
              duration={"4.7"}
              star={true}
              units={"16"}
            />
            <Divider style={{ height: 2, marginVertical: 16 }} />
            <TitleText
              style={styles.detailTextContainer}
              textstyle={styles.detailText}
            >
              Store Info
            </TitleText>
            <AddressInfo />
            <AdvantageList />
            <DeliveryFee />
            <Divider
              style={{
                height: 2,
                marginVertical: 22,
              }}
            />
            <MenuContainer />
          </View>
        </View>
      </ScrollView>
      <BottomDescriptionBar />
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    //paddingHorizontal: 12,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 14,
  },
  iconContainers: {
    position: "absolute",
    top: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    width: "100%",
  },
  imageContainer: {
    width: "100%",
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  titleText: {
    marginTop: 12,
    marginBottom: 18,
    paddingHorizontal: 0,
  },
  textContainer: {
    paddingHorizontal: "12",
    flex: 1,
  },
  descriptionText: {
    marginBottom: 10,
  },
  detailTextContainer: {
    marginVertical: 0,
    paddingHorizontal: 0,
  },
  detailText: {
    fontSize: 16,
  },
});

//make this component available to the app
export default MealDetail;
