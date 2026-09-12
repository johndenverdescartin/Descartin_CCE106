import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

// =========================
// METRIC CARD
// =========================
function MetricCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: string;
}) {
  return (
    <View style={styles.metricCard}>
      <View style={styles.metricTop}>
        <Text style={styles.metricIcon}>{icon}</Text>
        <Text style={styles.metricLabel}>{label}</Text>
      </View>

      <Text style={styles.metricValue}>{value}</Text>
    </View>
  );
}

// =========================
// QUICK ACTION
// =========================
function QuickAction({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {
  return (
    <Pressable style={styles.quickAction}>
      <View style={styles.quickIcon}>
        <Text>{icon}</Text>
      </View>

      <Text style={styles.quickText}>{title}</Text>
    </Pressable>
  );
}

// =========================
// ACTIVITY ITEM
// =========================
function ActivityItem({
  icon,
  title,
  date,
  amount,
  positive,
}: {
  icon: string;
  title: string;
  date: string;
  amount: string;
  positive?: boolean;
}) {
  return (
    <View style={styles.activityItem}>
      <View style={styles.activityIcon}>
        <Text>{icon}</Text>
      </View>

      <View style={styles.activityDetails}>
        <Text style={styles.activityTitle}>{title}</Text>
        <Text style={styles.activityDate}>{date}</Text>
      </View>

      <Text
        style={[
          styles.activityAmount,
          positive && styles.positiveAmount,
        ]}
      >
        {amount}
      </Text>
    </View>
  );
}

// =========================
// MAIN APP
// =========================
export default function App() {
  const { width } = useWindowDimensions();

  const isWide = width >= 600;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >

      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.smallGreeting}>GOOD MORNING</Text>
          <Text style={styles.headerTitle}>My Dashboard</Text>
        </View>

        <Pressable style={styles.profileButton}>
          <Text style={styles.profileIcon}>JD</Text>
        </Pressable>
      </View>


      {/* BALANCE BANNER */}
      <View style={styles.balanceCard}>
        <View>
          <Text style={styles.balanceLabel}>TOTAL BALANCE</Text>

          <Text style={styles.balanceValue}>
            ₱24,850.00
          </Text>

          <Text style={styles.balanceChange}>
            ↑ 8.4% from last month
          </Text>
        </View>

        <Text style={styles.balanceSymbol}>₱</Text>
      </View>


      {/* METRICS */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Overview</Text>
        <Text style={styles.viewText}>This month</Text>
      </View>

      <View style={styles.metricsContainer}>

        <View
          style={[
            styles.metricWrapper,
            { width: isWide ? '31%' : '48%' },
          ]}
        >
          <MetricCard
            label="Income"
            value="₱18,200"
            icon="↗"
          />
        </View>

        <View
          style={[
            styles.metricWrapper,
            { width: isWide ? '31%' : '48%' },
          ]}
        >
          <MetricCard
            label="Expenses"
            value="₱7,350"
            icon="↘"
          />
        </View>

        <View
          style={[
            styles.metricWrapper,
            { width: isWide ? '31%' : '48%' },
          ]}
        >
          <MetricCard
            label="Savings"
            value="₱10,850"
            icon="★"
          />
        </View>

      </View>


      {/* QUICK ACTIONS */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <View style={styles.quickContainer}>
        <QuickAction icon="＋" title="Add Money" />
        <QuickAction icon="↗" title="Transfer" />
        <QuickAction icon="▣" title="Bills" />
        <QuickAction icon="•••" title="More" />
      </View>


      {/* RECENT ACTIVITY */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>

        <Pressable>
          <Text style={styles.viewText}>View all</Text>
        </Pressable>
      </View>

      <View style={styles.activityContainer}>

        <ActivityItem
          icon="🛍️"
          title="Shopping"
          date="Today • 9:42 AM"
          amount="-₱850"
        />

        <ActivityItem
          icon="🍔"
          title="Food & Dining"
          date="Yesterday • 7:20 PM"
          amount="-₱320"
        />

        <ActivityItem
          icon="💵"
          title="Allowance"
          date="September 10 • 8:00 AM"
          amount="+₱5,000"
          positive
        />

        <ActivityItem
          icon="🚕"
          title="Transportation"
          date="September 9 • 5:15 PM"
          amount="-₱180"
        />

      </View>

    </ScrollView>
  );
}


// =========================
// STYLES
// =========================
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },


  // HEADER
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  smallGreeting: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1.2,
    color: '#94A3B8',
  },

  headerTitle: {
    fontSize: 27,
    fontWeight: '700',
    color: '#F8FAFC',
    marginTop: 4,
  },

  profileButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#14B8A6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileIcon: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },


  // BALANCE
  balanceCard: {
    backgroundColor: '#134E4A',
    borderRadius: 20,
    padding: 22,
    minHeight: 155,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 25,
  },

  balanceLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#99F6E4',
    letterSpacing: 1,
  },

  balanceValue: {
    fontSize: 34,
    fontWeight: '800',
    color: '#FFFFFF',
    marginTop: 8,
  },

  balanceChange: {
    fontSize: 12,
    color: '#A7F3D0',
    marginTop: 8,
  },

  balanceSymbol: {
    fontSize: 65,
    fontWeight: '800',
    color: '#2DD4BF',
    opacity: 0.5,
  },


  // SECTION
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#F8FAFC',
    marginBottom: 13,
    marginTop: 5,
  },

  viewText: {
    fontSize: 12,
    color: '#2DD4BF',
    marginBottom: 13,
  },


  // METRICS
  metricsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  metricWrapper: {
    marginBottom: 12,
  },

  metricCard: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    padding: 16,
    minHeight: 120,
    justifyContent: 'space-between',
  },

  metricTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  metricIcon: {
    fontSize: 16,
    color: '#2DD4BF',
    marginRight: 7,
  },

  metricLabel: {
    fontSize: 12,
    color: '#94A3B8',
  },

  metricValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#F8FAFC',
  },


  // QUICK ACTIONS
  quickContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  quickAction: {
    alignItems: 'center',
    width: '23%',
  },

  quickIcon: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#1E293B',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 7,
  },

  quickText: {
    fontSize: 11,
    color: '#CBD5E1',
    textAlign: 'center',
  },


  // ACTIVITY
  activityContainer: {
    backgroundColor: '#1E293B',
    borderRadius: 18,
    paddingHorizontal: 15,
  },

  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },

  activityIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#334155',
    justifyContent: 'center',
    alignItems: 'center',
  },

  activityDetails: {
    flex: 1,
    marginLeft: 12,
  },

  activityTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#F8FAFC',
  },

  activityDate: {
    fontSize: 11,
    color: '#94A3B8',
    marginTop: 3,
  },

  activityAmount: {
    fontSize: 14,
    fontWeight: '700',
    color: '#F87171',
  },

  positiveAmount: {
    color: '#2DD4BF',
  },

});