import { Link } from "expo-router";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import StatCard from "../../components/StatCard";
import { tasks } from "../../data/tasks";

export default function Dashboard() {
  const total = tasks.length;
  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;
  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  return (
    <ScrollView
      contentContainerStyle={styles.container}
    >
      <Text style={styles.title}>StudyFlow</Text>

      <Text style={styles.welcome}>
        Welcome back, Alex!
      </Text>

      <Text style={styles.subtitle}>
        Here's your study progress today.
      </Text>

      <View style={styles.stats}>
        <StatCard
          label="Total Tasks"
          value={total}
          color="#2563eb"
        />

        <StatCard
          label="Completed"
          value={completed}
          color="#16a34a"
        />

        <StatCard
          label="Pending"
          value={pending}
          color="#f59e0b"
        />
      </View>

      <Link href="/tasks" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            View My Tasks
          </Text>
        </Pressable>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f8fafc",
    flexGrow: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1d4ed8",
  },
  welcome: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "700",
    color: "#172554",
  },
  subtitle: {
    marginTop: 6,
    color: "#64748b",
  },
  stats: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 25,
    marginHorizontal: -5,
  },
  button: {
    marginTop: 30,
    backgroundColor: "#2563eb",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
