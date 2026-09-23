import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const API_URL = 'https://dummyjson.com/quotes/random';

export default function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchQuote = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }

      const data = await response.json();

      setQuote(data.quote);
      setAuthor(data.author);
    } catch (err) {
      setError('Failed to load quote. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>QUOTE OF THE DAY</Text>

      <View style={styles.card}>
        {loading ? (
          <View style={styles.center}>
            <ActivityIndicator size="large" color="#19B5FE" />
            <Text style={styles.loadingText}>Loading quote...</Text>
          </View>
        ) : error ? (
          <View style={styles.center}>
            <Text style={styles.error}>{error}</Text>
          </View>
        ) : (
          <>
            <Text style={styles.quote}>
              "{quote}"
            </Text>

            <Text style={styles.author}>
              — {author}
            </Text>
          </>
        )}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={fetchQuote}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          NEW QUOTE
        </Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        React Native • REST API
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07134F',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  heading: {
    color: '#25C5F5',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 25,
  },

  card: {
    width: '100%',
    minHeight: 300,
    backgroundColor: '#111E75',
    borderRadius: 20,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',

    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },

  quote: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    lineHeight: 36,
    textAlign: 'center',
  },

  author: {
    color: '#B9C5FF',
    fontSize: 17,
    fontStyle: 'italic',
    marginTop: 25,
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  loadingText: {
    color: '#FFFFFF',
    marginTop: 15,
    fontSize: 16,
  },

  error: {
    color: '#FF7F91',
    fontSize: 16,
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#19B5FE',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 30,
    marginTop: 25,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  footer: {
    color: '#7E8BC5',
    fontSize: 12,
    marginTop: 25,
  },
});
