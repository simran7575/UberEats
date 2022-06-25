import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabBar from "./components/BottomTabBar";
import { NavigationContainer } from "@react-navigation/native";
import "./components/IgnoreWarnings";
import MealDetail from "./screens/MealDetail";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={BottomTabBar} />
          <Stack.Screen name="DetailScreen" component={MealDetail} />
        </Stack.Navigator>
        {/* <BottomTabBar /> */}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
