import React, { useEffect, useState } from "react";
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

type Student = {
  id: number;
  name: string;
  attendance: "Present" | "Absent" | "Not Marked";
};

export default function Lab08() {
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: "Dwayne Lee Gonzales", attendance: "Absent" },
    { id: 2, name: "Edieson D. Malintad", attendance: "Present" },
    { id: 3, name: "John Denver Descartin", attendance: "Absent" },
    { id: 4, name: "Mike Airon Iroy", attendance: "Absent" },
    { id: 5, name: "Jade Olacao", attendance: "Present" },
    { id: 6, name: "Lhindex Gamones", attendance: "Present" },
  ]);

  const [presentCount, setPresentCount] = useState(0);
  const [absentCount, setAbsentCount] = useState(0);

  useEffect(() => {
    setPresentCount(
      students.filter((student) => student.attendance === "Present").length
    );

    setAbsentCount(
      students.filter((student) => student.attendance === "Absent").length
    );
  }, [students]);

  const markAttendance = (
    id: number,
    status: "Present" | "Absent"
  ) => {
    setStudents((previousStudents) =>
      previousStudents.map((student) =>
        student.id === id
          ? { ...student, attendance: status }
          : student
      )
    );
  };

  const resetAttendance = () => {
    setStudents((previousStudents) =>
      previousStudents.map((student) => ({
        ...student,
        attendance: "Not Marked",
      }))
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#2563EB"
      />

      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerSmall}>
            LAB ACTIVITY 08
          </Text>

          <Text style={styles.headerTitle}>
            Attendance
          </Text>

          <Text style={styles.headerSubtitle}>
            Manage student attendance easily
          </Text>
        </View>

        <View style={styles.headerIcon}>
          <Text style={styles.headerIconText}>✓</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* SUMMARY */}
        <View style={styles.summaryContainer}>
          {/* TOTAL */}
          <View style={[styles.summaryCard, styles.totalCard]}>
            <View style={[styles.summaryIcon, styles.totalIcon]}>
              <Text style={styles.summaryIconText}>👥</Text>
            </View>

            <Text style={styles.totalNumber}>
              {students.length}
            </Text>

            <Text style={styles.summaryLabel}>
              Total
            </Text>
          </View>

          {/* PRESENT */}
          <View style={[styles.summaryCard, styles.presentCard]}>
            <View style={[styles.summaryIcon, styles.presentIcon]}>
              <Text style={styles.summaryIconText}>✓</Text>
            </View>

            <Text style={styles.presentNumber}>
              {presentCount}
            </Text>

            <Text style={styles.summaryLabel}>
              Present
            </Text>
          </View>

          {/* ABSENT */}
          <View style={[styles.summaryCard, styles.absentCard]}>
            <View style={[styles.summaryIcon, styles.absentIcon]}>
              <Text style={styles.summaryIconText}>×</Text>
            </View>

            <Text style={styles.absentNumber}>
              {absentCount}
            </Text>

            <Text style={styles.summaryLabel}>
              Absent
            </Text>
          </View>
        </View>

        {/* SECTION HEADER */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>
              Student Attendance
            </Text>

            <Text style={styles.sectionSubtitle}>
              Mark each student's attendance
            </Text>
          </View>

          <View style={styles.countBadge}>
            <Text style={styles.countBadgeText}>
              {students.length}
            </Text>
          </View>
        </View>

        {/* STUDENT LIST */}
        {students.map((student) => (
          <View
            key={student.id}
            style={styles.studentCard}
          >
            <View style={styles.studentTop}>
              {/* AVATAR */}
              <View
                style={[
                  styles.avatar,
                  student.attendance === "Present"
                    ? styles.avatarPresent
                    : student.attendance === "Absent"
                    ? styles.avatarAbsent
                    : styles.avatarDefault,
                ]}
              >
                <Text style={styles.avatarText}>
                  {student.name.charAt(0)}
                </Text>
              </View>

              <View style={styles.nameContainer}>
                <Text style={styles.studentName}>
                  {student.name}
                </Text>

                <View style={styles.statusRow}>
                  <View
                    style={[
                      styles.statusDot,
                      student.attendance === "Present"
                        ? styles.dotPresent
                        : student.attendance === "Absent"
                        ? styles.dotAbsent
                        : styles.dotDefault,
                    ]}
                  />

                  <Text
                    style={[
                      styles.statusText,
                      student.attendance === "Present"
                        ? styles.presentText
                        : student.attendance === "Absent"
                        ? styles.absentText
                        : styles.notMarkedText,
                    ]}
                  >
                    {student.attendance}
                  </Text>
                </View>
              </View>
            </View>

          
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.attendanceButton,
                  styles.presentButton,
                  student.attendance === "Present" &&
                    styles.selectedPresent,
                ]}
                onPress={() =>
                  markAttendance(student.id, "Present")
                }
                activeOpacity={0.8}
              >
                <Text style={styles.checkIcon}>✓</Text>

                <Text style={styles.buttonText}>
                  Present
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.attendanceButton,
                  styles.absentButton,
                  student.attendance === "Absent" &&
                    styles.selectedAbsent,
                ]}
                onPress={() =>
                  markAttendance(student.id, "Absent")
                }
                activeOpacity={0.8}
              >
                <Text style={styles.xIcon}>×</Text>

                <Text style={styles.buttonText}>
                  Absent
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        
        <TouchableOpacity
          style={styles.resetButton}
          onPress={resetAttendance}
          activeOpacity={0.8}
        >
          <Text style={styles.resetIcon}>↻</Text>

          <Text style={styles.resetButtonText}>
            Reset Attendance
          </Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Lab Activity 08 • Student Attendance System
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF5FF",
  },

  

  header: {
    backgroundColor: "#2563EB",
    paddingTop: 55,
    paddingBottom: 28,
    paddingHorizontal: 22,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    shadowColor: "#1D4ED8",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },

  headerSmall: {
    color: "#BFDBFE",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 1.5,
    marginBottom: 5,
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "800",
  },

  headerSubtitle: {
    color: "#DBEAFE",
    fontSize: 14,
    marginTop: 4,
  },

  headerIcon: {
    width: 55,
    height: 55,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },

  headerIconText: {
    color: "#2563EB",
    fontSize: 28,
    fontWeight: "bold",
  },


  scrollContent: {
    padding: 18,
    paddingBottom: 40,
  },

  

  summaryContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 2,
    marginBottom: 25,
  },

  summaryCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: "center",

    shadowColor: "#64748B",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  totalCard: {
    borderTopWidth: 4,
    borderTopColor: "#2563EB",
  },

  presentCard: {
    borderTopWidth: 4,
    borderTopColor: "#16A34A",
  },

  absentCard: {
    borderTopWidth: 4,
    borderTopColor: "#DC2626",
  },

  summaryIcon: {
    width: 35,
    height: 35,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },

  totalIcon: {
    backgroundColor: "#DBEAFE",
  },

  presentIcon: {
    backgroundColor: "#DCFCE7",
  },

  absentIcon: {
    backgroundColor: "#FEE2E2",
  },

  summaryIconText: {
    fontSize: 17,
    fontWeight: "bold",
  },

  totalNumber: {
    color: "#2563EB",
    fontSize: 26,
    fontWeight: "800",
  },

  presentNumber: {
    color: "#16A34A",
    fontSize: 26,
    fontWeight: "800",
  },

  absentNumber: {
    color: "#DC2626",
    fontSize: 26,
    fontWeight: "800",
  },

  summaryLabel: {
    color: "#64748B",
    fontSize: 12,
    fontWeight: "600",
    marginTop: 2,
  },

  

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  sectionTitle: {
    color: "#0F172A",
    fontSize: 21,
    fontWeight: "800",
  },

  sectionSubtitle: {
    color: "#64748B",
    fontSize: 13,
    marginTop: 3,
  },

  countBadge: {
    minWidth: 35,
    height: 35,
    paddingHorizontal: 10,
    borderRadius: 12,
    backgroundColor: "#DBEAFE",
    justifyContent: "center",
    alignItems: "center",
  },

  countBadgeText: {
    color: "#2563EB",
    fontSize: 14,
    fontWeight: "bold",
  },

 

  studentCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    marginBottom: 13,

    shadowColor: "#64748B",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  studentTop: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },

  avatarPresent: {
    backgroundColor: "#DCFCE7",
  },

  avatarAbsent: {
    backgroundColor: "#FEE2E2",
  },

  avatarDefault: {
    backgroundColor: "#E2E8F0",
  },

  avatarText: {
    fontSize: 21,
    fontWeight: "800",
    color: "#334155",
  },

  nameContainer: {
    flex: 1,
  },

  studentName: {
    color: "#1E293B",
    fontSize: 15,
    fontWeight: "700",
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    marginRight: 6,
  },

  dotPresent: {
    backgroundColor: "#16A34A",
  },

  dotAbsent: {
    backgroundColor: "#DC2626",
  },

  dotDefault: {
    backgroundColor: "#94A3B8",
  },

  statusText: {
    fontSize: 13,
    fontWeight: "600",
  },

  presentText: {
    color: "#16A34A",
  },

  absentText: {
    color: "#DC2626",
  },

  notMarkedText: {
    color: "#64748B",
  },

  

  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },

  attendanceButton: {
    flex: 1,
    height: 44,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  presentButton: {
    backgroundColor: "#22C55E",
  },

  absentButton: {
    backgroundColor: "#EF4444",
  },

  selectedPresent: {
    backgroundColor: "#15803D",
    borderWidth: 2,
    borderColor: "#14532D",
  },

  selectedAbsent: {
    backgroundColor: "#B91C1C",
    borderWidth: 2,
    borderColor: "#7F1D1D",
  },

  checkIcon: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 6,
  },

  xIcon: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "bold",
    marginRight: 6,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },

 

  resetButton: {
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 8,
  },

  resetIcon: {
    color: "#475569",
    fontSize: 22,
    fontWeight: "bold",
    marginRight: 8,
  },

  resetButtonText: {
    color: "#475569",
    fontSize: 15,
    fontWeight: "700",
  },

 

  footerText: {
    textAlign: "center",
    color: "#94A3B8",
    fontSize: 11,
    marginTop: 20,
  },
});