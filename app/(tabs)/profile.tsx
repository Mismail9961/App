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

export default function Profile() {
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
        style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}
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
            source={require("../../assets/images/logo.png")}
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

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileHeader}>
            <Image
              source={require("../../assets/images/logo.png")}
              style={styles.profileImage}
              resizeMode="cover"
            />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>John Farmer</Text>
              <Text style={styles.profileEmail}>john@farmersboutique.com</Text>
              <Text style={styles.profileLocation}>📍 Green Valley Farm</Text>
            </View>
          </View>

          {/* Profile Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>24</Text>
              <Text style={styles.statLabel}>Orders</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>156</Text>
              <Text style={styles.statLabel}>Products</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>4.8</Text>
              <Text style={styles.statLabel}>Rating</Text>
            </View>
          </View>

          {/* Profile Actions */}
          <View style={styles.actionsContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="settings-outline" size={20} color="#6B5F4A" />
              <Text style={styles.actionText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="notifications-outline" size={20} color="#6B5F4A" />
              <Text style={styles.actionText}>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="help-circle-outline" size={20} color="#6B5F4A" />
              <Text style={styles.actionText}>Help</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* My Products Section */}
        <Text style={styles.sectionTitle}>My Products</Text>

        <View style={styles.grid}>
          {[
            { title: "Fresh Vegetables", icon: "🥬", price: "$12.99" },
            { title: "Organic Fruits", icon: "🍎", price: "$8.50" },
            { title: "Dairy Products", icon: "🥛", price: "$15.99" },
            { title: "Farm Eggs", icon: "🥚", price: "$6.99" },
            { title: "Herbs & Spices", icon: "🌿", price: "$9.99" },
            { title: "Honey", icon: "🍯", price: "$11.50" },
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.productCard}>
              <Text style={styles.productEmoji}>{item.icon}</Text>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
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
  logo: { width: 90, height: 80 },

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

  // Profile Section Styles
  profileSection: {
    backgroundColor: "#F8F6F0",
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 15,
    padding: 20,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6B5F4A",
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 14,
    color: "#8B7D6B",
    marginBottom: 5,
  },
  profileLocation: {
    fontSize: 14,
    color: "#8B7D6B",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6B5F4A",
  },
  statLabel: {
    fontSize: 12,
    color: "#8B7D6B",
    marginTop: 5,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    flex: 1,
    marginHorizontal: 5,
    justifyContent: "center",
  },
  actionText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#6B5F4A",
    fontWeight: "500",
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
  productCard: {
    width: 100,
    height: 120,
    backgroundColor: "#D8CFB0",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    padding: 10,
  },
  productEmoji: { fontSize: 26, marginBottom: 5 },
  productTitle: {
    fontSize: 12,
    color: "#5A5142",
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 3,
  },
  productPrice: {
    fontSize: 14,
    color: "#6B5F4A",
    fontWeight: "bold",
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
