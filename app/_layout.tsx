import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="lab08"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
