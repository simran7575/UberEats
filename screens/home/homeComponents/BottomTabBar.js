import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "../../account/Account";
import Home from "../Home";
import Grocery from "../../grocery/Grocery";
import Orders from "../../orders/Orders";
import Search from "../../search/Search";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function BottomTabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarStyle: {
          position: "absolute",
          height: "8%",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          flex: 1,
        },
        tabBarIconStyle: {
          flex: 1,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ size, color, foucused }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="GroceryScreen"
        component={Grocery}
        options={{
          tabBarLabel: "Grocery",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="basket" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="OrdersScreen"
        component={Orders}
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="receipt" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={Account}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabBar;
