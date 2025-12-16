import { View, StyleSheet, useWindowDimensions } from "react-native";
import { useState } from "react";
import LoginForm from "../components/LoginForm";
import HeroSection from "../components/HeroSection";
import HomePage from "./HomePage";

export default function LoginScreen() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 900;

  const [screen, setScreen] = useState("login");

  if (screen === "home") {
    return <HomePage />;
  }

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        
        <View style={styles.left}>
          <LoginForm onGetStarted={() => setScreen("home")} />
        </View>

         
        {isDesktop && (
          <View style={styles.right}>
            <HeroSection />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
  },

  container: {
    flex: 1,
    flexDirection: "row",
  },

  left: {
    flex: 1,
    maxWidth:578,
  },

  right: {
    flex: 1,
    backgroundColor: "#FFEEC2",
  },
});
