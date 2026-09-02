import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';

export default function HomeScreen() {
  // Information you will fill in
  const [name, setName] = useState('');
  const [program, setProgram] = useState('');
  const [age, setAge] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Saved information
  const [savedName, setSavedName] = useState('');
  const [savedProgram, setSavedProgram] = useState('');
  const [savedAge, setSavedAge] = useState('');
  const [savedHobbies, setSavedHobbies] = useState('');
  const [savedBio, setSavedBio] = useState('');
  const [savedEmail, setSavedEmail] = useState('');
  const [savedPhone, setSavedPhone] = useState('');

  const [message, setMessage] = useState('');

  const handleSave = () => {
    if (
      name.trim() === '' ||
      program.trim() === '' ||
      age.trim() === ''
    ) {
      setMessage('Please fill in the required fields.');
      return;
    }

    setSavedName(name);
    setSavedProgram(program);
    setSavedAge(age);
    setSavedHobbies(hobbies);
    setSavedBio(bio);
    setSavedEmail(email);
    setSavedPhone(phone);

    setMessage('Profile saved successfully!');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.card}>

        <Text style={styles.title}>Personal Profile</Text>

        <Text style={styles.subtitle}>
          My First Mobile App
        </Text>

        <View style={styles.line} />

        {/* NAME */}
        <Text style={styles.label}>Full Name *</Text>

        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your full name"
          placeholderTextColor="#94A3B8"
        />

        {/* PROGRAM */}
        <Text style={styles.label}>Program *</Text>

        <TextInput
          style={styles.input}
          value={program}
          onChangeText={setProgram}
          placeholder="Enter your program"
          placeholderTextColor="#94A3B8"
        />

        {/* AGE */}
        <Text style={styles.label}>Age *</Text>

        <TextInput
          style={styles.input}
          value={age}
          onChangeText={setAge}
          placeholder="Enter your age"
          placeholderTextColor="#94A3B8"
          keyboardType="numeric"
        />

        {/* HOBBIES */}
        <Text style={styles.label}>Hobbies</Text>

        <TextInput
          style={styles.input}
          value={hobbies}
          onChangeText={setHobbies}
          placeholder="Enter your hobbies"
          placeholderTextColor="#94A3B8"
        />

        {/* BIOGRAPHY */}
        <Text style={styles.label}>Biography</Text>

        <TextInput
          style={[styles.input, styles.textArea]}
          value={bio}
          onChangeText={setBio}
          placeholder="Write something about yourself"
          placeholderTextColor="#94A3B8"
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />

        {/* EMAIL */}
        <Text style={styles.label}>Email</Text>

        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          placeholderTextColor="#94A3B8"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* PHONE */}
        <Text style={styles.label}>Phone Number</Text>

        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Enter your phone number"
          placeholderTextColor="#94A3B8"
          keyboardType="phone-pad"
        />

        {/* SAVE BUTTON */}
        <Pressable
          style={styles.button}
          onPress={handleSave}
        >
          <Text style={styles.buttonText}>
            Save Profile
          </Text>
        </Pressable>

        {/* MESSAGE */}
        {message !== '' && (
          <View style={styles.messageBox}>
            <Text style={styles.message}>
              {message}
            </Text>
          </View>
        )}

        {/* SAVED PROFILE */}
        {savedName !== '' && (
          <View style={styles.savedBox}>
            <Text style={styles.savedTitle}>
              Saved Profile
            </Text>

            <Text style={styles.savedText}>
              Name: {savedName}
            </Text>

            <Text style={styles.savedText}>
              Program: {savedProgram}
            </Text>

            <Text style={styles.savedText}>
              Age: {savedAge}
            </Text>

            <Text style={styles.savedText}>
              Hobbies: {savedHobbies || 'Not provided'}
            </Text>

            <Text style={styles.savedText}>
              Biography: {savedBio || 'Not provided'}
            </Text>

            <Text style={styles.savedText}>
              Email: {savedEmail || 'Not provided'}
            </Text>

            <Text style={styles.savedText}>
              Phone: {savedPhone || 'Not provided'}
            </Text>
          </View>
        )}

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#DCEBFF',
    padding: 20,
  },

  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 22,
    alignSelf: 'center',
    elevation: 5,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E293B',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 5,
  },

  line: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 20,
  },

  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#334155',
    marginBottom: 6,
    marginTop: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    color: '#1E293B',
    backgroundColor: '#F8FAFC',
  },

  textArea: {
    height: 100,
  },

  button: {
    backgroundColor: '#2563EB',
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  messageBox: {
    backgroundColor: '#E0F2FE',
    padding: 12,
    borderRadius: 10,
    marginTop: 12,
  },

  message: {
    color: '#0369A1',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  savedBox: {
    backgroundColor: '#EEF6FF',
    borderRadius: 12,
    padding: 16,
    marginTop: 18,
  },

  savedTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 10,
  },

  savedText: {
    fontSize: 14,
    color: '#334155',
    marginBottom: 7,
  },
});
