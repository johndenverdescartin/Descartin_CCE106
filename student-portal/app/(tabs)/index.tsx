import { Link } from 'expo-router';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, John!</Text>
          <Text style={styles.title}>Student Portal</Text>
        </View>

        <Link href="/student/146165" asChild>
          <Pressable style={styles.profileButton}>
            <Text style={styles.profileText}>JD</Text>
          </Pressable>
        </Link>
      </View>

      {/* Student Overview */}
      <View style={styles.studentCard}>
        <View>
          <Text style={styles.cardLabel}>STUDENT ACCOUNT</Text>
          <Text style={styles.studentName}>John Denver</Text>
          <Text style={styles.studentInfo}>BS Information Technology</Text>
        </View>

        <View style={styles.idBox}>
          <Text style={styles.idLabel}>ID</Text>
          <Text style={styles.idText}>146165</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Access</Text>

      <View style={styles.actionRow}>
        <Link href="/course/101" asChild>
          <Pressable style={styles.actionButton}>
            <Text style={styles.actionIcon}>📖</Text>
            <Text style={styles.actionText}>Courses</Text>
          </Pressable>
        </Link>

        <Link href="/student/146165" asChild>
          <Pressable style={styles.actionButton}>
            <Text style={styles.actionIcon}>👨‍🎓</Text>
            <Text style={styles.actionText}>My Profile</Text>
          </Pressable>
        </Link>
      </View>

      {/* Courses */}
      <View style={styles.courseHeader}>
        <Text style={styles.sectionTitle}>My Courses</Text>
        <Text style={styles.courseCount}>3 Courses</Text>
      </View>

      <Link href="/course/101" asChild>
        <Pressable style={styles.courseCard}>
          <View style={styles.courseNumber}>
            <Text style={styles.numberText}>01</Text>
          </View>

          <View style={styles.courseContent}>
            <Text style={styles.courseCode}>CCE 106</Text>
            <Text style={styles.courseName}>
              APPLICATION DEVELOPMENT AND EMERGING TECHNOLOGIES
            </Text>
          </View>

          <Text style={styles.arrow}>→</Text>
        </Pressable>
      </Link>

      <Link href="/course/102" asChild>
        <Pressable style={styles.courseCard}>
          <View style={styles.courseNumber}>
            <Text style={styles.numberText}>02</Text>
          </View>

          <View style={styles.courseContent}>
            <Text style={styles.courseCode}>IT 12</Text>
            <Text style={styles.courseName}>
              SYSTEMS INTEGRATION & ARCHITECTURE
            </Text>
          </View>

          <Text style={styles.arrow}>→</Text>
        </Pressable>
      </Link>

      <Link href="/course/103" asChild>
        <Pressable style={styles.courseCard}>
          <View style={styles.courseNumber}>
            <Text style={styles.numberText}>03</Text>
          </View>

          <View style={styles.courseContent}>
            <Text style={styles.courseCode}>IT 13</Text>
            <Text style={styles.courseName}>
              PROFESSIONAL TRACK FOR IT 4
            </Text>
          </View>

          <Text style={styles.arrow}>→</Text>
        </Pressable>
      </Link>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2F6',
    paddingHorizontal: 18,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 22,
  },

  greeting: {
    fontSize: 14,
    color: '#697586',
    marginBottom: 4,
  },

  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#17202A',
  },

  profileButton: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#17202A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  studentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },

  cardLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#7B8794',
    letterSpacing: 1,
    marginBottom: 7,
  },

  studentName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#17202A',
    marginBottom: 5,
  },

  studentInfo: {
    fontSize: 13,
    color: '#68737D',
  },

  idBox: {
    backgroundColor: '#E8F0F7',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: 'center',
  },

  idLabel: {
    fontSize: 10,
    color: '#68737D',
    fontWeight: 'bold',
    marginBottom: 3,
  },

  idText: {
    fontSize: 14,
    color: '#17202A',
    fontWeight: 'bold',
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#17202A',
    marginBottom: 12,
  },

  actionRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 28,
  },

  actionButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingVertical: 17,
    alignItems: 'center',
  },

  actionIcon: {
    fontSize: 24,
    marginBottom: 7,
  },

  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#263238',
  },

  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  courseCount: {
    fontSize: 12,
    color: '#7B8794',
    marginBottom: 12,
  },

  courseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 15,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  courseNumber: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#E8F0F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  numberText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#455A64',
  },

  courseContent: {
    flex: 1,
    paddingRight: 8,
  },

  courseCode: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#536B78',
    marginBottom: 4,
  },

  courseName: {
    fontSize: 14,
    color: '#263238',
    lineHeight: 19,
  },

  arrow: {
    fontSize: 22,
    color: '#7B8794',
  },
});