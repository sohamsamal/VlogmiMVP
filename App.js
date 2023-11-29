import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Recommender from './components/Recommender/Recommender';
import { useRef, useState } from 'react';
import ContentCard from './components/ContentCard/ContentCard';
import ActionSheet from 'react-native-actions-sheet';
import { LinearGradient } from 'expo-linear-gradient';
import ViewDetails from './components/Views/View';

const userNames = {
  "lukethorssen": "Luke",
  "rafaellathorssen": "Rafaellat",
  "alexalitonjua": "Alexalitonjua"
}

export default function App() {
  const [showData, setShowData] = useState(false);
  const actionSheetRef = useRef(null);
  const [checkProductIcon, setCheckProductIcon] = useState(false)
  const [user, setUser] = useState('')
  const [data, setData] = useState(0)
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
                  <Text style={{ color: "white", fontWeight: 800, fontSize: 32, marginBottom: 12 }} >{userNames[user]}</Text>
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
            {
              checkProductIcon ? <>
                <ContentCard onPress={() => {
                  actionSheetRef.current?.show();
                  setData(1)
                }} title="Good Behavior Clothing: Try on haul" />
                <ContentCard onPress={() => {
                  actionSheetRef.current?.show();
                  setData(2)
                }} title="Good Behavior Clothing: Stress Test" />
              </> : <>
                <ContentCard onPress={() => {
                  actionSheetRef.current?.show();
                  setData(3)
                }} title="Barbie Movie Makeup: Pink glam makeup tutorial" />
                <ContentCard onPress={() => {
                  actionSheetRef.current?.show();
                  setData(3)
                }} title="Barbie Movie Roll: Trends and Tips
                " />
              </>
            }

          </View>
        </ScrollView>
        <ActionSheet containerStyle={{ backgroundColor: "transparent" }} ref={actionSheetRef}>
          <ViewDetails type={data} onPress={() => actionSheetRef.current?.hide()} user={user} />
        </ActionSheet>
      </SafeAreaView>
    );
  } else {
    return (
      <View style={styles.container}>
        <Recommender userNames={userNames} handleShow={() => setShowData(true)} checkProductIcon={checkProductIcon} setCheckProductIcon={setCheckProductIcon} handleChangeUser={(data) => setUser(data)} />
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
