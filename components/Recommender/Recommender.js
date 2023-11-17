import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet, Image, View } from 'react-native';
import Typewriter from 'react-native-typewriter';
import axios from 'axios'; // Import Axios
import LinearGradient from 'react-native-linear-gradient'; // Import LinearGradient
import ContentCard from '../ContentCard/ContentCard';


export default function Recommender() {
  const [handle, setHandle] = useState('');
  const [loading, setLoading] = useState(false);
  const [blurb, setBlurb] = useState('');
  const [blurb2, setBlurb2] = useState('');
  const [typedMessages, setTypedMessages] = useState([]);
  const [animationsCompleted, setAnimationsCompleted] = useState(false); // New state for tracking animations completion


  const messages = [
    "Analyzing your followers' taste...",
    "Crafting personalized recommendations...",
    "Finalizing tips for your next post..."
  ];

  const [apiBlurb, setApiBlurb] = useState(''); 
  const [apiBlurb2, setApiBlurb2] = useState(''); 


  const handleGenerate = () => {
    setLoading(true);
    setBlurb('');
    setBlurb2('');
    setTypedMessages([]);
    setApiBlurb('');
    setApiBlurb2('');


    if (handle !== 'lukethorssen') {
      setBlurb("Please put in a valid account.");
      setLoading(false);
      return;
    }

    axios.get(`https://vlogmi-f37db73e2a60.herokuapp.com/api/v1/instagram/all`)
    .then(response => {
        // Assuming response.data contains the array of data
        const allData = response.data.result;
        // Filter to find the data for "videoidea1" and "videoidea2"
        const videoIdea1Data = allData.find(item => item.name === 'videoidea1');
        const videoIdea2Data = allData.find(item => item.name === 'videoidea2');

        setApiBlurb(videoIdea1Data.data);
        setApiBlurb2(videoIdea2Data.data);

    })
    .catch(error => {
        console.error('Error:', error);
        setLoading(false);
    });


    setAnimationsCompleted(false)

  };

  const onTypingEnd = () => {
    const nextIndex = typedMessages.length;
    if (nextIndex < messages.length - 1) {
      setTypedMessages(currentTypedMessages => [...currentTypedMessages, messages[nextIndex]]);
    } else if (nextIndex === messages.length - 1) {
      setLoading(false);
      setAnimationsCompleted(true); 
      setTypedMessages([]);
      // setBlurb(apiBlurb || `It's recommended to focus on lifestyle content with a blend of travel and fashion. Engaging with followers through stories and regular posts about daily activities would be beneficial.`);
    }
  };



  const parseContent = (contentString) => {
    const titleMatch = contentString.match(/Title: '([^']+)'/); // Capture any character between ' and ' after Title:
    // Look for "Description: " and capture everything after it
    const descriptionMatch = contentString.match(/Description: (.*)/);
    console.log(descriptionMatch)
    return {
      title: titleMatch ? titleMatch[1].trim() : '',
      // If descriptionMatch is found, return everything after "Description: "
      // otherwise, return an empty string
      description: descriptionMatch ? descriptionMatch[1].trim() : '',
    };
  };
  
  

  const renderContent = () => {
    // Assume apiBlurb is the string you got from the API
    if (apiBlurb) {
      const { title, description } = parseContent(apiBlurb);
      return (
        <ContentCard
          title={title}
          description={description}
        />
      );
    }
  };

  const renderContent2 = () => {
    // Assume apiBlurb is the string you got from the API
    if (apiBlurb2) {
      const { title, description } = parseContent(apiBlurb2);
      return (
        <ContentCard
          title={title}
          description={description}
        />
      );
    }
  };




  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./logp.png')} // Replace with your local logo image path
      />
      <Text style={styles.greetingText}>Hey, { handle || 'there!'}</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setHandle(text)}
        value={handle}
        placeholder="Enter Instagram Handle"
        placeholderTextColor="#999"
        autoCapitalize="none" 
      />
      <TouchableOpacity style={styles.button} onPress={handleGenerate}>
        {loading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <Text style={styles.buttonText}>Let's go!</Text>
        )}
      </TouchableOpacity>
      {blurb && <Text style={styles.blurbText}>{blurb}</Text>}
      {!blurb && (
      <View>
        {typedMessages.map((msg, index) => (
          <Text key={index} style={styles.typingText}>{msg}</Text>
        ))}

        {loading && typedMessages.length < messages.length && (
          <Typewriter
            typing={1}
            onTypingEnd={onTypingEnd}
            style={styles.typingText}
          >
            {messages[typedMessages.length]}
          </Typewriter>
        )}
      </View>
    )}
      {animationsCompleted && renderContent()}
      {animationsCompleted && renderContent2()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    width: '100%'
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    color: '#FFF',
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#E1306C',
    borderRadius: 25,
    padding: 15,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  greetingText: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: '600', // slightly bolder
    marginBottom: 20,
    fontFamily: 'Helvetica', // a common built-in font
  },

  typingText: {
    color: '#FFF',
    textAlign: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
    fontFamily: 'Arial', // another standard font
    fontSize: 18,
    fontStyle: 'italic', // adds a bit of flair
  },

  blurbContainer: {
    backgroundColor: '#1c1c1e', // A slightly lighter dark background to contrast with the overall dark theme
    borderRadius: 20,
    padding: 20,
    marginTop: 10,
    shadowColor: '#FFF', // White color for the shadow to be subtle
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 10, // for Android
    borderWidth: 1,
    borderColor: '#E1306C', // Using the app's accent color for the border
  },
  blurbText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Arial', // You can choose any font that suits your design
    fontSize: 18,
    fontWeight: '400', // Normal weight to keep it clean and professional
    marginBottom: 10, // Adds some space below the text if needed
  },});
