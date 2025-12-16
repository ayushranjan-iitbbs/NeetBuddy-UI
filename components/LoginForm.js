import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";
import SocialButtons from "./SocialButtons";

export default function LoginForm({ onGetStarted }) {
  return (
    <View style={styles.container}>

       
      <View style={styles.top}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Neet Buddy</Text>
        <Text style={styles.subtitle}>
          Welcome aboard! Let’s get you started
        </Text>

        <SocialButtons />

        <Text style={styles.or}>or</Text>

        <TextInput
          placeholder="Enter Email ID/Mobile Number"
          placeholderTextColor="#999"
          style={styles.input}
        />

        <Pressable style={styles.cta} onPress={onGetStarted}>
          <Text style={styles.ctaText}>Get Started</Text>
        </Pressable>
      </View>

      {/* FOOTER */}
      <View style={styles.bottom}>
        <Text style={styles.footer}>
          I Already have an account? <Text style={styles.login}>Login</Text>
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    maxWidth: 380,              
    alignSelf: "center",
    paddingHorizontal: 26,
    justifyContent: "space-between",  
    paddingVertical: 32,
  },

  top: {
    alignItems: "stretch",
    justifyContent: "center",
    flex: 1,                    
  },

  bottom: {
    alignItems: "center",
  },

  logo: {
    width: 130,
    height: 130,
    alignSelf: "center",
    marginBottom: 16,
  },

  title: {
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
    marginBottom:10,
  },

  subtitle: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
    marginBottom: 24,
  },

  or: {
    textAlign: "center",
    color: "#888",
    marginVertical: 12,
    fontSize: 12,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 14,
    marginBottom: 18,
    textAlign:'center',
  },

  cta: {
    backgroundColor: "#FFC107",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
  },

  ctaText: {
    fontWeight: "700",
    fontSize: 14,
    color: "#000",
  },

  footer: {
    fontSize: 12,
    color: "#777",
  },

  login: {
    fontWeight: "600",
    color: "#000",
  },
});
