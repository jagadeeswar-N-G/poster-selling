"use client"
import React, { createContext, useContext, useState, ReactNode, FunctionComponent, useEffect } from 'react';
import { string } from 'zod';

// cartContext.tsx

interface CartContextType {
  items: Item[];
  addItem: (item: Item) => void;
}

interface Item {
  name: string;
  price: number;
  imageSrc: string;
}








// Define the type for your context
interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (itemid: string) => void;
  getTotalPrice: () => number
}

// Create the context with an initial value of undefined
export const AuthContext = createContext<AuthContextType | undefined>({
  items: [],
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  addItem: () => {},
  removeItem: () => {},
  getTotalPrice: Number
});

// Define the props for the AuthProvider component
interface AuthProviderProps {
  children: ReactNode;
}

// AuthProvider component
export const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
  // State to track the login status
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Check if the user was logged in before the refresh
    const storedLoggedInState = localStorage.getItem('isLoggedIn');
    return storedLoggedInState ? JSON.parse(storedLoggedInState) : false;
  });
  // Function to perform login
  const login = () => {
    // Perform your login logic here
    // For simplicity, let's assume successful login
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  // Function to perform logout
  const logout = () => {
    // Perform your logout logic here
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  const [items, setItems] = useState<Item[]>(() => {
    // Initialize with data from local storage
    const storedItems = localStorage.getItem('cartItems');
    return storedItems ? JSON.parse(storedItems) : [];
  });;

  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  // Save cart items to local storage whenever items change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  }, [items]);

  const addItem = (item: Item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const removeItem = (itemId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.name !== itemId));
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  // Provide the context value to its children
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, addItem, items, removeItem, getTotalPrice }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to consume the AuthContext
export const useAuth = (): AuthContextType => {
  // Get the context value
  const context = useContext(AuthContext);

  // Throw an error if the hook is not used within an AuthProvider
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  // Return the context value
  return context;
};
