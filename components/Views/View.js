import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'

const ViewDetails = ({ onPress, type = 1 }) => {
  return (
    <LinearGradient colors={["#161616", "#353535"]} style={{
      height: '100%'
    }}>
      <ScrollView>
        {type === 1 && <>
          <View style={{ marginTop: 40, marginBottom: 40, marginLeft: 35, marginRight: 35, position: "relative" }}>
            <Pressable style={{ position: "absolute", top: 0, right: 0, zIndex: 1 }} onPress={onPress}><Image style={{ width: 30, height: 30 }} source={require('../../assets/icons/expand_down.png')} /></Pressable>
            <Text style={{ fontSize: 35, textAlign: "center", color: "#FFF", marginBottom: 20 }} >🔥🔥🔥</Text>
            <Text style={{ color: "white", fontSize: 30, textAlign: "center", color: "#FFF", marginBottom: 20 }}>Good Behavior Clothing: Try On Haul</Text>
            <Text style={{ color: "white", fontSize: 30, color: "#FFF", marginBottom: 20 }}>EMOJIS:🛍️👕😂
            </Text>
            <Text style={{ color: "white", fontSize: 16, fontWeight: 600 }}>Caption:</Text>
            <Text style={{ color: "white", fontSize: 16, marginBottom: 16 }}>"Spreading good vibes with Good Behavior! 🛍️😄 #FashionReviewFun" </Text>
            <Text style={{ color: "white", fontSize: 16, }}>SEO-Optimized Hashtags:</Text>
            <Text style={{ color: "white", fontSize: 16, }}>#GoodBehaviorStyle</Text>
            <Text style={{ color: "white", fontSize: 16, }}>#FashionReview</Text>
            <Text style={{ color: "white", fontSize: 16, }}>#TryOnChallenge</Text>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginBottom: 10, marginTop: 10 }}>VIDEO OUTLINE:</Text>
            <Text style={{ color: "white", marginBottom: 10 }}>"Hey [Influencer's Name]! Ready for some epic content that'll have your followers hooked? Let's combine your fans' interests with the latest trends and the awesome 'Good Behavior' brand.</Text>
            <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Introduction</Text>
            <Text style={{ color: "white"}}>Start with a catchy greeting: "Hey fam! It's [Influencer's Name] back with another vibe check!"</Text>
            <Text style={{ color: "white"}}>Highlight the fashion and clothing review traits by showcasing a few trendy pieces from your wardrobe.</Text>
            <Text style={{ color: "white"}}>Inject humor by cracking a light joke related to fashion or lifestyle to keep the energy high.</Text>

            <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Main Content:</Text>
            <Text style={{ color: "white"}}> Introduce the "Good Behavior" brand and its unique story (made from retired fishing boat sails).</Text>
            <Text style={{ color: "white"}}> Perform a quick try-on haul with the brand's items, giving your honest review.</Text>
            <Text style={{ color: "white"}}>Incorporate elements of the challenge trend by making it interactive – maybe ask your followers to rate your outfits or suggest other items from the brand they'd like you to try.</Text>

            <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Call-to-Action:</Text>
            <Text style={{ color: "white"}}>End with a call-to-action: "Tap that like button if you're loving these Good Behavior vibes! 🔥 Don't forget to follow for more fashion fun! #GoodBehaviorStyle"</Text>

            <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Closing:</Text>
            <Text style={{ color: "white"}}> Conclude with a positive and engaging sign-off: "Thanks for hanging out, beautiful people! Catch you in the next one. Stay stylish, stay positive! ✨👗" </Text>
            <Text style={{ color: "white"}}> This outline combines the influencer's fans' interests, current trends on the platform, and the unique aspects of the "Good Behavior" brand, providing a versatile framework for a captivating TikTok video. </Text>
            <Image style={{ width: 300, marginTop: 10, resizeMode: 'contain' }} source={require('../../assets/1.png')} />
          </View></>}

        {type === 2 && <>
          <View style={{ marginTop: 40, marginBottom: 40, marginLeft: 35, marginRight: 35, position: "relative" }}>
            <Pressable style={{ position: "absolute", top: 0, right: 0, zIndex: 1 }} onPress={onPress}><Image style={{ width: 30, height: 30 }} source={require('../../assets/icons/expand_down.png')} /></Pressable>
            <Text style={{ fontSize: 35, textAlign: "center", color: "#FFF", marginBottom: 20 }} >🔥🔥🔥</Text>
            <Text style={{ color: "white", fontSize: 30, textAlign: "center", color: "#FFF", marginBottom: 20 }}>Good Behavior: How to Style the Rebel Weekender</Text>
            <Text style={{ color: "white", fontSize: 30, color: "#FFF", marginBottom: 20 }}>EMOJIS:😎👜✌
            </Text>
            <Text style={{ color: "white", fontSize: 16, fontWeight: 600 }}>Caption:</Text>
            <Text style={{ color: "white", fontSize: 16, marginBottom: 16 }}>"Unleash style with #GoodBehavior 🌟 Fashion, laughs, and lifestyle vibes!" </Text>
            <Text style={{ color: "white", fontSize: 16, }}>SEO-Optimized Hashtags:</Text>
            <Text style={{ color: "white", fontSize: 16, }}>#GoodBehaviorStyle</Text>
            <Text style={{ color: "white", fontSize: 16, }}>#FashionFunnies</Text>
            <Text style={{ color: "white", fontSize: 16, }}>#SailIntoStyle</Text>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginBottom: 10, marginTop: 10 }}>VIDEO OUTLINE:</Text>
            <Text style={{ color: "white", marginBottom: 10 }}>"Hey [Influencer's Name]! 🌟 Ready to dive into a sea of style and laughter with your amazing followers? Here's a TikTok video idea tailored just for them:</Text>

            <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Opening Shot:</Text>
            <Text style={{ color: "white" }}>Start with a captivating shot of you wearing a trendy outfit from Good Behavior. Make it playful and showcase the fashion piece.</Text>

            <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Fashion Review & Styling Tips:</Text>
            <Text style={{ color: "white" }}>Dive into a quick fashion review of the Good Behavior outfit. Highlight unique features made from retired fishing boat sails. Share styling tips and tricks – your fans love your fashion sense!</Text>

            <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Comedy Segment:</Text>
            <Text style={{ color: "white" }}>Inject some humor! Maybe a quick funny dance or a light-hearted fashion-related joke. Keep it in line with your usual comedic style.</Text>

            <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Lifestyle Integration:</Text>
            <Text style={{ color: "white" }}>Seamlessly integrate the outfit into your daily life. Show how it fits your lifestyle – whether you're on the go, hanging out with friends, or even doing a quick fashion runway in unexpected places.</Text>

            <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Current Trends Showcase:</Text>
            <Text style={{ color: "white" }}>Address the latest TikTok trends related to styling and big bags. Incorporate these trends into your video to stay current and appeal to the broader TikTok community.</Text>

            <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>Call-to-Action:</Text>
            <Text style={{ color: "white" }}>Wrap up with a call-to-action. Encourage your followers to check out Good Behavior for more unique and sustainable fashion pieces. Maybe throw in a challenge or ask them to share their styling ideas using your suggested hashtags.</Text>

            <Text style={{ color: "white" }}>Remember, feel free to add your personal touch and creativity to make it uniquely yours! Your audience loves your style and humor, so let those traits shine through. Can't wait to see your amazing video! 🚀 #GoCreate"</Text>
            <Image style={{ width: 300, marginTop: 10, resizeMode: 'contain' }} source={require('../../assets/2.png')} />


          </View></>}

        {type === 3 && <>
          <View style={{ marginTop: 40, marginBottom: 40, marginLeft: 35, marginRight: 35, position: "relative" }}>
            <Pressable style={{ position: "absolute", top: 0, right: 0, zIndex: 1 }} onPress={onPress}><Image style={{ width: 30, height: 30 }} source={require('../../assets/icons/expand_down.png')} /></Pressable>
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
          </View></>}

      </ScrollView>
    </LinearGradient>
  )
}

export default ViewDetails