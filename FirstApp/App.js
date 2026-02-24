import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView, 
  TextInput, 
  Button, 
  Alert 
} from 'react-native';

export default function App() {
  const [userName, setUserName] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* 1. Header (VIEW + TEXT) */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome back!</Text>
        <Text style={styles.subtitle}>Let's build your profile.</Text>
      </View>

      {/* 2. Avatar (IMAGE) */}
      <Image 
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
        style={styles.avatar} 
      />

      {/* 3. Input Field (TEXTINPUT) */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter your name:</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. John Doe"
          value={userName}
          onChangeText={setUserName} // Updates the variable as you type
        />
      </View>

      {/* 4. Action (BUTTON) */}
      <View style={styles.buttonContainer}>
        <Button 
          title="Save Profile" 
          onPress={() => Alert.alert('Saved!', `Hello, ${userName}`)}
        />
      </View>

      {/* 5. Scrollable Content (TEXT Lorem Ipsum) */}
      <View style={styles.bioContainer}>
        <Text style={styles.bio}>
          Bio: This is a scrollable view. If you add enough text here, 
          you can scroll down. React Native makes scrolling easy with ScrollView!
          {"\n\n"}
          (Scroll down to see more...)
          {"\n\n"}
          Keep learning!
          {"\n\n"}
          Keep building!
          {"\n\n"}
          Keep coding!
          {"\n\n"}
          Almost there...
          {"\n\n"}
          Done.
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Ensures ScrollView takes full height
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, // Makes it circular
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '600',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '100%',
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 20,
  },
  bioContainer: {
    width: '80%',
    marginTop: 20,
  },
  bio: {
    fontSize: 14,
    lineHeight: 22,
  },
});

