import { View, Text, StyleSheet } from "react-native";
import TitleText from "../../../components/TitleText";
import IconButton from "../../../components/IconButton";

// create a component
function DeliveryFee() {
  return (
    <View style={styles.container}>
      <TitleText style={styles.textContainer} textstyle={styles.textstyle}>
        Delivery Fee
      </TitleText>
      <View style={styles.innerContainer}>
        <TitleText
          style={styles.textContainer}
          textstyle={styles.innertextstyle}
        >
          {
            "There aren't enough couriers nearby, so \nthe delivery fee is higher right now"
          }
        </TitleText>
        <View style={styles.icon}>
          <IconButton
            name={"arrow-up"}
            size={18}
            color={"#7A7A7A"}
            backgroundColor={"#D6D6D6"}
          />
        </View>
      </View>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    borderColor: "#e6e5e3",
    borderWidth: 2,
  },
  textContainer: {
    marginVertical: 12,
    paddingHorizontal: 0,
    flex: 4,
  },
  textstyle: {
    fontSize: 14,
    color: "#a3a2a2",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    flex: 1,
    alignItems: "center",
  },

  innertextstyle: {
    fontSize: 14,
    fontWeight: "200",
  },
});

//make this component available to the app
export default DeliveryFee;
