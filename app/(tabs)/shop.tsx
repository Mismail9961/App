import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "Product Name",
      price: 3.99,
      image: require("../../assets/images/logo.png"), // using existing logo as placeholder
    },
    {
      id: 2,
      name: "Product Name",
      price: 3.99,
      image: require("../../assets/images/logo.png"),
    },
    {
      id: 3,
      name: "Product Name",
      price: 3.99,
      image: require("../../assets/images/logo.png"),
    },
    {
      id: 4,
      name: "Product Name",
      price: 3.99,
      image: require("../../assets/images/logo.png"),
    },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color="#000" />
        </TouchableOpacity>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Ionicons name="cart-outline" size={22} color="#B7A97A" />
      </View>

      {/* Title */}
      <Text style={styles.title}>My Cart</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            </View>
            <View style={styles.counter}>
              <TouchableOpacity style={styles.counterButton}>
                <Ionicons name="remove-outline" size={16} color="#000" />
              </TouchableOpacity>
              <Text style={styles.counterText}>1</Text>
              <TouchableOpacity style={styles.counterButton}>
                <Ionicons name="add-outline" size={16} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {/* Total */}
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
        </View>

        {/* Buy Now Button */}
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyText}>Buy Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color: "#B7A97A",
    marginVertical: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 10,
  },
  name: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  price: {
    fontSize: 14,
    color: "#000",
    marginTop: 4,
    fontWeight: "bold",
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#fff",
  },
  counterButton: {
    paddingHorizontal: 6,
  },
  counterText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  totalText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  buyButton: {
    backgroundColor: "#C2B89B",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 30,
  },
  buyText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
