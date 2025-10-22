import { Slot, useRouter } from "expo-router";
import { useEffect } from "react";
import { AuthProvider, useAuth } from "@/lib/auth-context";
import { ActivityIndicator, View } from "react-native";

function AppLayout() {
  const { user, isLoadingUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoadingUser) return; // wait until auth state is ready

    // ✅ Avoid redirect loops
    if (!user) {
      router.replace("/auth");
    } else {
      router.replace("/(tabs)");
    }
  }, [user, isLoadingUser]);

  // ✅ Optional loading screen
  if (isLoadingUser) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <ActivityIndicator size="large" color="#B9B093" />
      </View>
    );
  }

  return <Slot />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <AppLayout />
    </AuthProvider>
  );
}
