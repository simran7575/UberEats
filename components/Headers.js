import { Pressable, Text, StyleSheet, View } from "react-native";

function Headers({ children, onPress, active }) {
  return (
    <Pressable
      style={[
        !active && styles.headerContainerInactive,
        active && styles.headerContainerActive,
      ]}
      onPress={onPress.bind(this, children)}
    >
      <View>
        <Text
          style={[
            !active && styles.headerTextInactive,
            active && styles.headerTextActive,
          ]}
        >
          {children}
        </Text>
      </View>
    </Pressable>
  );
}

// define your styles
const styles = StyleSheet.create({
  headerContainerInactive: {
    alignItems: "center",
    marginHorizontal: 6,
    marginVertical: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    backgroundColor: "transparent",
  },
  headerContainerActive: {
    alignItems: "center",
    marginHorizontal: 6,
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    backgroundColor: "black",
  },
  headerTextActive: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  headerTextInactive: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

//make this component available to the app
export default Headers;
