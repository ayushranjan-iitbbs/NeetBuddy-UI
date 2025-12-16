import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";
import HomePage from "./screens/HomePage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
     <LoginScreen/>
  );
}
