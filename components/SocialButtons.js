import { View, Pressable, Text, StyleSheet, Image } from "react-native";

export default function SocialButtons() {
  const providers = [
    { name: "Google", image: require("../assets/google.png") },
    { name: "Apple", image: require("../assets/apple.png") },
  ];

  return (
    <View style={styles.row}>
      {providers.map((p) => (
        <Pressable
          key={p.name}
          style={({ hovered, pressed }) => [
            styles.btn,
            hovered && styles.btnHover,      
            pressed && styles.btnPressed     
          ]}
        >
          <View style={styles.content}>
            <Image source={p.image} style={styles.icon} resizeMode="contain" />
            <Text style={styles.text}>{p.name}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 10,
    marginTop: 5,
    marginBottom: 5,
  },

  btn: {
  flex: 1,
  borderWidth: 1,
  borderColor: "#ddd",
  paddingVertical: 10,
  alignItems: "center",
  borderRadius: 8,
  backgroundColor: "#fff",
},


  // Hover (Web only)
  btnHover: {
    backgroundColor: "#f3f3f3",
  },

  // Press active state (mobile + web)
  btnPressed: {
    backgroundColor: "#e6e6e6",  
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  icon: {
    width: 20,
    height: 20,
  },

  text: {
    fontWeight: 600,
  },
});
