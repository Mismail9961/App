import React, { useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { useAuth } from "@/lib/auth-context";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function AuthScreen() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { signIn, signUp } = useAuth();
  const router = useRouter();

  const handleAuth = async () => {
    if (!email || !password) return setError("Please fill in all fields.");
    if (password.length < 6)
      return setError("Password must be at least 6 characters long.");

    setError(null);
    const result = isSignUp
      ? await signUp(email, password)
      : await signIn(email, password);

    if (result) return setError(result);
    router.replace("/(tabs)");
  };

  return (
    <LinearGradient
      colors={["#0F2027", "#203A43", "#2C5364"]}
      style={styles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.logoContainer}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/1047/1047711.png",
              }}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.appTitle}>FitPulse</Text>
            <Text style={styles.appSubtitle}>
              {isSignUp ? "Start your journey 💪" : "Welcome back, champ 🏋️‍♂️"}
            </Text>
          </View>

          <View style={styles.card}>
            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              mode="outlined"
              left={<TextInput.Icon icon="email-outline" />}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              textContentType="emailAddress"
              autoCorrect={false}
              editable
            />

            <TextInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              mode="outlined"
              left={<TextInput.Icon icon="lock-outline" />}
              right={
                <TextInput.Icon
                  icon={hidePassword ? "eye-off-outline" : "eye-outline"}
                  onPress={() => setHidePassword(!hidePassword)}
                />
              }
              secureTextEntry={hidePassword}
              style={styles.input}
              textContentType="password"
              autoCorrect={false}
              editable
            />

            {error && <Text style={styles.errorText}>{error}</Text>}

            <Button
              mode="contained"
              onPress={handleAuth}
              style={styles.button}
              labelStyle={{ fontSize: 16, fontWeight: "700" }}
              contentStyle={{ paddingVertical: 6 }}
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>

            <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
              <Text style={styles.toggleText}>
                {isSignUp
                  ? "Already have an account? "
                  : "Don’t have an account? "}
                <Text style={styles.toggleHighlight}>
                  {isSignUp ? "Sign In" : "Sign Up"}
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 40,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 30,
    paddingHorizontal: 16,
  },
  logo: {
    width: width * 0.25,
    height: width * 0.25,
    tintColor: "#00e676",
  },
  appTitle: {
    fontSize: 32,
    fontWeight: "900",
    color: "#fff",
    marginTop: 8,
    letterSpacing: 1,
    textAlign: "center",
  },
  appSubtitle: {
    color: "#a8dadc",
    fontSize: 14,
    marginTop: 4,
    textAlign: "center",
  },
  card: {
    marginHorizontal: 20,
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 20,
    borderRadius: 20,
  },
  input: {
    marginBottom: 16,
    backgroundColor: "rgba(255,255,255,0.15)",
  },
  button: {
    backgroundColor: "#00e676",
    marginTop: 8,
    borderRadius: 12,
  },
  toggleText: {
    color: "#fff",
    textAlign: "center",
    marginTop: 16,
  },
  toggleHighlight: {
    color: "#00e676",
    fontWeight: "bold",
  },
  errorText: {
    color: "#ff5252",
    textAlign: "center",
    marginBottom: 10,
  },
});
