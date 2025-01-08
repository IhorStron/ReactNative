import { Alert } from "react-native";

export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
  }
  
  const API_URL = "https://fakestoreapi.com/products";
  
  export const fetchProducts = async (): Promise<Product[]> => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching products:", error);
      Alert.alert("Error");
      return [];
    }
  };
  