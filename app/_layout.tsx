import { Slot } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { AuthProvider, useAuth } from "@/lib/auth-context";
import { useRouter } from "expo-router";

function AppLayout() {
  const { user, isLoadingUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoadingUser) return;

    if (!user) {
      router.replace("/auth");
    } else {
      router.replace("/(tabs)");
    }
  }, [user, isLoadingUser, router]);

  if (isLoadingUser) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center" as const,
          justifyContent: "center" as const,
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
