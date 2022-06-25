import React, { useState } from "react";
import { View, Dimensions, Image, StyleSheet } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);

const data = [
  {
    id: 1,
    url: require("../../../assets/slide_1.jpg"),
  },
  {
    id: 2,
    url: require("../../../assets/slide_2.jpg"),
  },
  {
    id: 3,
    url: require("../../../assets/slide_3.jpg"),
  },
];

function RenderCarousel() {
  const [index, setIndex] = useState(0);
  const renderItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={item.url} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        layout="default"
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
      />
      <View style={styles.paginationContainer}>
        <Pagination
          dotsLength={3}
          activeDotIndex={index}
          dotStyle={{
            width: 9,
            height: 9,
            borderRadius: 4,
            backgroundColor: "#fff",
          }}
          inactiveDotStyle={{
            backgroundColor: "#545252",
            // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.8}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    backgroundColor: "transparent",
    overflow: "hidden",
    height: 220,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  carouselContainer: {
    alignItems: "center",
  },
  paginationContainer: {
    position: "absolute",
    bottom: -10,
  },
});
export default RenderCarousel;
