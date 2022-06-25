import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabBar from "./screens/home/homeComponents/BottomTabBar";
import { NavigationContainer } from "@react-navigation/native";
import "./components/IgnoreWarnings";
import DishDetail from "./screens/dishdetail/DishDetail";

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
          <Stack.Screen name="DetailScreen" component={DishDetail} />
        </Stack.Navigator>
        {/* <BottomTabBar /> */}
      </NavigationContainer>
    </>
  );
}
