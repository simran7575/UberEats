import { View, Text, StyleSheet, Platform } from "react-native";

function StatusBarBackground(props) {
  return <View style={[styles.statusBarBackground, props.style || {}]}></View>;
}

const styles = StyleSheet.create({
  statusBarBackground: {
    height: 18, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
    backgroundColor: "white",
  },
});

export default StatusBarBackground;
