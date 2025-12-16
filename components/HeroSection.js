import { View, Text, StyleSheet, Image } from "react-native";

export default function HeroSection() {
  return (
    <View style={styles.container}>
       
      <View style={styles.quoteBlock}>
        <Text style={styles.quote}>
          “ The AI insights helped me identify my weak areas within minutes. 
             <br></br>   Practicing with targeted questions every day boosted my confidence 
             <br></br>   massively! ”
        </Text>

        <Text style={styles.author}>
              <br></br>   Riya Sharma, NEET 2024 Aspirant
        </Text>
      </View>

       
      <View style={styles.imageWrapper}>
        <Image
          source={require("../assets/main-hero.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEEC2",
  },

   
  quoteBlock: {
    paddingTop: 36,
    paddingLeft: 60,     
    paddingRight: 40,
  },

  quote: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "500",
    color: "#000",
    marginBottom: 5,
  },

  author: {
    fontSize: 12,
    color: "#333",
  },

  
 imageWrapper: {
  flex: 1,
  marginTop: 40,
  borderRadius: 3,
   
},

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    marginLeft: 60,
     
  },
});
