import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={28} color="#6B5F4A" />
        </TouchableOpacity>
        <Image
          source={{
            uri: "https://i.ibb.co/1X2Y1vC/logo.png", // replace with your logo
          }}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={{ width: 28 }} /> {/* empty space for balance */}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  logo: {
    width: 90,
    height: 40,
  },
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
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
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
  emoji: {
    fontSize: 26,
  },
  cardText: {
    marginTop: 5,
    fontSize: 14,
    color: "#5A5142",
    fontWeight: "500",
  },
});
