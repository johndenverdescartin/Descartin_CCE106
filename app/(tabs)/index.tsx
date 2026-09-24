import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  getCurrentUser,
  loginUser,
} from '../../services/authService';

import {
  deleteToken,
  getToken,
  saveToken,
} from '../../storage/tokenStorage';

type UserProfile = {
  image?: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  id: number | string;
};

export default function App() {
  const [username, setUsername] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    restoreSession();
  }, []);

  async function restoreSession() {
    try {
      const token = await getToken();

      if (!token) {
        return;
      }

      const currentUser = await getCurrentUser(token);
      setProfile(currentUser);
    } catch (err) {
      await deleteToken();
      setProfile(null);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin() {
    setError('');
    setLoading(true);

    try {
      const data = await loginUser(username, password);

      await saveToken(data.accessToken);

      const currentUser = await getCurrentUser(data.accessToken);
      setProfile(currentUser);
    } catch (err) {
      setError('Login failed. Check your username and password.');
      setProfile(null);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    await deleteToken();
    setProfile(null);
    setError('');
  }

  if (loading) {
    return (
      <SafeAreaView style={styles.center}>
        <ActivityIndicator size="large" color="#2563eb" />
        <Text style={styles.loadingText}>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (!profile) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loginCard}>
          <Text style={styles.title}>Secure Profile</Text>
          <Text style={styles.subtitle}>
            Sign in to view your profile
          </Text>

          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            placeholder="Username"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            placeholder="Password"
          />

          {error ? (
            <Text style={styles.error}>{error}</Text>
          ) : null}

          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
            disabled={loading}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.testInfo}>
            Practice account: emilys
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.profileCard}>
        <Text style={styles.title}>My Profile</Text>

        {profile.image ? (
          <Image
            source={{ uri: profile.image }}
            style={styles.avatar}
          />
        ) : null}

        <View style={styles.infoBox}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>
            {profile.firstName} {profile.lastName}
          </Text>

          <Text style={styles.label}>Username</Text>
          <Text style={styles.value}>
            {profile.username}
          </Text>

          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>
            {profile.email}
          </Text>

          <Text style={styles.label}>User ID</Text>
          <Text style={styles.value}>
            {profile.id}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
  },

  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#374151',
  },

  loginCard: {
    margin: 24,
    marginTop: 80,
    padding: 24,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    elevation: 3,
  },

  profileCard: {
    padding: 24,
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
    textAlign: 'center',
  },

  subtitle: {
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 24,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginTop: 14,
    marginBottom: 6,
  },

  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },

  button: {
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },

  logoutButton: {
    backgroundColor: '#dc2626',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginTop: 24,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },

  error: {
    color: '#dc2626',
    marginTop: 12,
    fontSize: 14,
  },

  testInfo: {
    marginTop: 18,
    color: '#6b7280',
    textAlign: 'center',
    fontSize: 12,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginVertical: 20,
  },

  infoBox: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    elevation: 2,
  },

  value: {
    fontSize: 17,
    color: '#111827',
    marginBottom: 8,
  },
});
