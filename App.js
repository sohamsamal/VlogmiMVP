import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Recommender from './components/Recommender/Recommender';
import { useRef, useState } from 'react';
import ContentCard from './components/ContentCard/ContentCard';
import ActionSheet from 'react-native-actions-sheet';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [showData, setShowData] = useState(false);
  const actionSheetRef = useRef(null);
  if (showData) {
    return (
      <SafeAreaView style={{ backgroundColor: "#000", height: "100%", paddingTop: 20 }}>
        <ScrollView >
          <View >
            <Pressable onPress={() => setShowData(false)} ><Image style={{ width: 30, height: 30, transform: [{ rotate: '90deg' }], marginLeft: 16, marginTop: 16 }} source={require('./assets/icons/expand_down.png')} /></Pressable>
            <View style={{ padding: 24 }}>
              <Text style={{ color: "#FE2B68" }}>CREATOR STUDIO AI</Text>
              <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                  <Text style={{ color: "white", fontWeight: 800, fontSize: 32 }} >Hey,</Text>
                  <Text style={{ color: "white", fontWeight: 800, fontSize: 32, marginBottom: 12 }} >Rafaella</Text>
                </View>
                <Image style={{ width: 60, height: undefined, aspectRatio: 1 }} source={require('./assets/image.png')} />
              </View>
              <Text style={{ color: "white", marginBottom: 16 }}>ANALYTICS</Text>
            </View>
            <Image style={{ width: "100%", height: undefined, aspectRatio: 642 / 516 }} source={require('./assets/test.png')} />
            <View style={{ padding: 24, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ color: "white" }}>CONTENT SUGGESTIONS</Text>
              <Image style={{ width: 24, height: 24 }} source={require('./assets/icons/refresh.png')} />
            </View>
          </View>
          <View style={{ padding: 24, display: "flex", flexDirection: "column", gap: 24 }}>
            <ContentCard onPress={() => {
              actionSheetRef.current?.show();
            }} title="Good Behavior Clothing: Try on haul" />
            <ContentCard onPress={() => {
              actionSheetRef.current?.show();
            }} title="Good Behavior Clothing: Stress Test" />
          </View>
        </ScrollView>
        <ActionSheet containerStyle={{ backgroundColor: "transparent" }} ref={actionSheetRef}>
          <LinearGradient colors={["#161616", "#353535"]} style={{
            height: '100%'
          }}>
            <ScrollView>
              <View style={{ marginTop: 40, marginBottom: 40, marginLeft: 35, marginRight: 35, position: "relative" }}>
                <Pressable style={{ position: "absolute", top: 0, right: 0, zIndex: 1 }} onPress={() => actionSheetRef.current?.hide()}><Image style={{ width: 30, height: 30 }} source={require('./assets/icons/expand_down.png')} /></Pressable>
                <Text style={{ fontSize: 35, textAlign: "center", color: "#FFF", marginBottom: 20 }} >🔥🔥🔥</Text>
                <Text style={{ color: "white", fontSize: 30, textAlign: "center", color: "#FFF", marginBottom: 20 }}>Barbie Movie Makeup: Pink glam makeup tutorial</Text>
                <Text style={{ color: "white", fontSize: 16, fontWeight: 600 }}>Caption:</Text>
                <Text style={{ color: "white", fontSize: 16, marginBottom: 16 }}>"Transforming into a real-life Barbie! 💖 Join me on this pink glam makeup journey from start to finish, and let's embrace our inner doll together! 🎀 </Text>
                <Text style={{ color: "white", fontSize: 16, }}>Tags:</Text>
                <Text style={{ color: "white", fontSize: 16, }}>#BarbieMakeup</Text>
                <Text style={{ color: "white", fontSize: 16, }}>#GlamTutorial</Text>
                <Text style={{ color: "white", fontSize: 16, }}>#PinkGlam</Text>
                <Text style={{ color: "white", fontSize: 16, }}>#DollInspired</Text>
                <Text style={{ color: "white", fontSize: 16, marginBottom: 16 }}>#MakeupMagic</Text>
                <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>VIDEO OUTLINE:</Text>
                <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Introduction</Text>
                <Text style={{ color: "white", marginLeft: 10 }}><Text>{'\u2022'}</Text> Greet your audience with excitement.</Text>
                <Text style={{ color: "white", marginLeft: 10 }}><Text>{'\u2022'}</Text> Introduce the captivating Barbie glam makeup theme.</Text>

                <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Showcasing the Products</Text>
                <Text style={{ color: "white", marginLeft: 10 }}><Text>{'\u2022'}</Text> Display and discuss the authentic, unfiltered makeup products.</Text>

                <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Base Makeup</Text>
                <Text style={{ color: "white", marginLeft: 10 }}><Text>{'\u2022'}</Text> Apply foundation, concealer, and set the base.</Text>
                <Text style={{ color: "white", marginLeft: 10 }}><Text>{'\u2022'}</Text> Share tips and tricks for achieving a flawless base.</Text>

                <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Eye Makeup</Text>
                <Text style={{ color: "white", marginLeft: 10 }}><Text>{'\u2022'}</Text> Create a Barbie-inspired eye look with pink eyeshadows.</Text>
                <Text style={{ color: "white", marginLeft: 10 }}><Text>{'\u2022'}</Text> Discuss blending and shaping techniques.</Text>

                <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Doll-Like Features</Text>
                <Text style={{ color: "white", marginLeft: 10 }}><Text>{'\u2022'}</Text> Focus on contouring to enhance doll-like features.</Text>

                <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Pink Lips</Text>
                <Text style={{ color: "white", marginLeft: 10 }}><Text>{'\u2022'}</Text> Apply a vibrant pink lipstick for the perfect Barbie pout.</Text>
                <Text style={{ color: "white", marginLeft: 10 }}><Text>{'\u2022'}</Text> Discuss lip care and application tips.</Text>

                <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Final Touches and Hair</Text>
                <Text style={{ color: "white", marginLeft: 10 }}><Text>{'\u2022'}</Text> Complete the makeup look with final touches.</Text>
                <Text style={{ color: "white", marginLeft: 10 }}><Text>{'\u2022'}</Text> Optionally, share quick tips for a Barbie-inspired hairstyle.</Text>

                <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Closing and Call-to-Action</Text>
                <Text style={{ color: "white", marginLeft: 10 }}><Text>{'\u2022'}</Text> Thank your viewers for joining the Barbie glam journey.</Text>
                <Text style={{ color: "white", marginLeft: 10 }}><Text>{'\u2022'}</Text> Encourage them to like, comment, and share the video.</Text>
                <Text style={{ color: "white", marginLeft: 10 }}><Text>{'\u2022'}</Text> Remind them to stay tuned for more captivating content.</Text>
              </View>
            </ScrollView>
          </LinearGradient>
        </ActionSheet>
      </SafeAreaView>
    );
  } else {
    return (
      <View style={styles.container}>
        <Recommender handleShow={() => setShowData(true)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
