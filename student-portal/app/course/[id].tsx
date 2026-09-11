import { Link, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const courses = {
  '101': {
    code: 'CCE 106',
    name: 'APPLICATION DEVELOPMENT AND EMERGING TECHNOLOGIES',
  },
  '102': {
    code: 'IT 12',
    name: 'SYSTEMS INTEGRATION & ARCHITECTURE',
  },
  '103': {
    code: 'IT 13',
    name: 'PROFESSIONAL TRACK FOR IT 4',
  },
};

export default function CourseDetails() {
  const { id } = useLocalSearchParams();

  const course = courses[id as keyof typeof courses];

  return (
    <View style={styles.container}>
      
      <Text style={styles.heading}>Course Information</Text>
      <Text style={styles.subtitle}>Details about this subject</Text>

      <View style={styles.courseCard}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{course?.code ?? 'N/A'}</Text>
        </View>

        <Text style={styles.courseName}>
          {course?.name ?? 'Course not found'}
        </Text>

        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <Text style={styles.label}>Course ID</Text>
          <Text style={styles.value}>{id}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Status</Text>
          <Text style={styles.status}>Active</Text>
        </View>
      </View>

      <Link href="/(tabs)" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>← Return to Home</Text>
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
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 14,
    color: '#7B8794',
    marginBottom: 20,
  },

  courseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 22,
    marginBottom: 20,
  },

  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#E8F0F7',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 10,
    marginBottom: 15,
  },

  badgeText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#455A64',
  },

  courseName: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 'bold',
    color: '#17202A',
  },

  divider: {
    height: 1,
    backgroundColor: '#E3E7EA',
    marginVertical: 20,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  label: {
    fontSize: 14,
    color: '#7B8794',
  },

  value: {
    fontSize: 14,
    fontWeight: '600',
    color: '#263238',
  },

  status: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4F6F52',
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