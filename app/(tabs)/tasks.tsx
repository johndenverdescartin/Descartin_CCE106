import { router } from "expo-router";
import { useState } from "react";
import {
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

import TaskCard from "../../components/TaskCard";
import { tasks } from "../../data/tasks";

type Filter = "All" | "Pending" | "Completed";

export default function TasksScreen() {
  const [filter, setFilter] = useState<Filter>("All");

  const filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter((task) => task.status === filter);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Tasks</Text>

      <View style={styles.filters}>
        {(["All", "Pending", "Completed"] as Filter[]).map(
          (item) => (
            <Pressable
              key={item}
              onPress={() => setFilter(item)}
              style={[
                styles.filter,
                filter === item && styles.activeFilter,
              ]}
            >
              <Text
                style={[
                  styles.filterText,
                  filter === item &&
                    styles.activeFilterText,
                ]}
              >
                {item}
              </Text>
            </Pressable>
          )
        )}
      </View>

      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            onPress={() =>
              router.push(`/task/${item.id}`)
            }
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>
            No tasks found.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    paddingTop: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "800",
    color: "#172554",
    paddingHorizontal: 20,
  },
  filters: {
    flexDirection: "row",
    padding: 20,
    gap: 8,
  },
  filter: {
    paddingVertical: 9,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#e2e8f0",
  },
  activeFilter: {
    backgroundColor: "#2563eb",
  },
  filterText: {
    color: "#334155",
    fontWeight: "600",
  },
  activeFilterText: {
    color: "#fff",
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  empty: {
    textAlign: "center",
    color: "#64748b",
    marginTop: 30,
  },
});
