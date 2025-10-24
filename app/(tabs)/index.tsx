import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const slideAnim = useRef(new Animated.Value(-width)).current;
  const router = useRouter();

  const toggleMenu = () => {
    Animated.timing(slideAnim, {
      toValue: menuOpen ? -width : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { label: "Home", icon: "home-outline", route: "/" },
    { label: "Shop", icon: "bag-handle-outline", route: "/shop" },
    { label: "Profile", icon: "person-outline", route: "/profile" },
    { label: "Wishlist", icon: "heart-outline", route: "/wishlist" },
    { label: "Auth", icon: "log-in-outline", route: "/auth" },
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* Sidebar Overlay */}
      {menuOpen && (
        <TouchableOpacity
          activeOpacity={1}
          onPress={toggleMenu}
          style={styles.overlay}
        />
      )}

      {/* Sidebar */}
      <Animated.View
        style={[
          styles.sidebar,
          { transform: [{ translateX: slideAnim }] },
        ]}
      >
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => {
              toggleMenu();
              router.push(item.route as any);
            }}
          >
            <Ionicons name={item.icon as any} size={22} color="#fff" />
            <Text style={styles.menuLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>

      {/* Main Content */}
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={toggleMenu}>
            <Ionicons name="menu" size={28} color="#6B5F4A" />
          </TouchableOpacity>
          <Image
            source={{
              uri: "https://i.ibb.co/1X2Y1vC/logo.png",
            }}
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={{ width: 28 }} />
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput placeholder="Search" style={styles.searchInput} />
          <Ionicons name="search" size={22} color="#6B5F4A" />
        </View>

        {/* Hero Image */}
        <Image
          source={require("../../assets/images/Clip path group.png")}
          style={styles.heroImage}
          resizeMode="cover"
        />

        {/* Featured Products */}
        <Text style={styles.sectionTitle}>Featured Products</Text>

        <View style={styles.grid}>
          {[
            { title: "Live stock", icon: "🐄" },
            { title: "Product", icon: "🍼" },
            { title: "Birds", icon: "🐦" },
            { title: "Farms", icon: "🌾" },
            { title: "Cattle", icon: "🐂" },
            { title: "Cattle", icon: "🐃" },
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.card}>
              <Text style={styles.emoji}>{item.icon}</Text>
              <Text style={styles.cardText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  logo: { width: 90, height: 40 },

  searchContainer: {
    marginTop: 15,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchInput: { flex: 1, fontSize: 16, color: "#333" },

  heroImage: {
    width: "100%",
    height: 160,
    borderRadius: 8,
    marginTop: 15,
  },

  sectionTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
    color: "#6B5F4A",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 15,
    paddingBottom: 40,
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: "#D8CFB0",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  emoji: { fontSize: 26 },
  cardText: {
    marginTop: 5,
    fontSize: 14,
    color: "#5A5142",
    fontWeight: "500",
  },

  sidebar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width * 0.6,
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.9)",
    paddingTop: 120,
    paddingHorizontal: 25,
    zIndex: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
  },
  menuLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 18,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 5,
  },
});
