import { Link, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const students = {
  '146165': {
    name: 'John Denver',
    program: 'BS IT',
    year: '3rd Year',
  },
};

export default function StudentDetails() {
  const { id } = useLocalSearchParams();

  const student = students[id as keyof typeof students];

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>My Profile</Text>

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>JD</Text>
        </View>

        <Text style={styles.name}>
          {student?.name ?? 'Student Not Found'}
        </Text>

        <Text style={styles.program}>
          {student?.program ?? 'N/A'}
        </Text>
      </View>

      <View style={styles.infoCard}>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Student ID</Text>
          <Text style={styles.value}>{id}</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.infoRow}>
          <Text style={styles.label}>Year Level</Text>
          <Text style={styles.value}>
            {student?.year ?? 'N/A'}
          </Text>
        </View>

        <View style={styles.line} />

        <View style={styles.infoRow}>
          <Text style={styles.label}>Program</Text>
          <Text style={styles.value}>
            {student?.program ?? 'N/A'}
          </Text>
        </View>

      </View>

      <Link href="/(tabs)" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>← Back to Home</Text>
        </Pressable>
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2F6',
    padding: 20,
    justifyContent: 'center',
  },

  heading: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#17202A',
    marginBottom: 18,
  },

  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 15,
  },

  avatar: {
    width: 75,
    height: 75,
    borderRadius: 38,
    backgroundColor: '#17202A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  avatarText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#17202A',
    marginBottom: 4,
  },

  program: {
    fontSize: 14,
    color: '#7B8794',
  },

  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },

  label: {
    fontSize: 14,
    color: '#7B8794',
  },

  value: {
    fontSize: 14,
    fontWeight: '600',
    color: '#263238',
    maxWidth: '60%',
    textAlign: 'right',
  },

  line: {
    height: 1,
    backgroundColor: '#E3E7EA',
    marginVertical: 12,
  },

  button: {
    backgroundColor: '#17202A',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
});