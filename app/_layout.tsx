import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const isAuth = false;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && !isAuth) {
      router.replace("/auth");
    }
  }, [isMounted, isAuth]);

  if (!isMounted) return null; // prevent premature render

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
