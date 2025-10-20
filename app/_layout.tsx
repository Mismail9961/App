import { Slot } from "expo-router";
import { AuthProvider, useAuth } from "@/lib/auth-context";
import { useEffect } from "react";
import { useRouter } from "expo-router";

function AppLayout() {
  const { user, isLoadingUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoadingUser) {
      if (!user) router.replace("/auth");
      else router.replace("/(tabs)");
    }
  }, [user, isLoadingUser]);

  return <Slot />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <AppLayout />
    </AuthProvider>
  );
}
