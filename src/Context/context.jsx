import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../Firebase/FirebaseConfig"; // Firebase auth & Firestore
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut 
} from "../Firebase/FirebaseConfig";
import { 
  doc,  
  addDoc, 
  collection, 
  updateDoc, 
  deleteDoc, 
  getDocs 
} from "../Firebase/FirebaseConfig";

// Create Context
const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        await fetchUserData(currentUser.uid);
      } else {
        setUserData(null);
      }

      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  // 🔹 Register new user & add user data to Firestore
  const register = async (email, password, additionalData) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user data in Firestore with auto-generated ID
      const docRef = await addDoc(collection(db, "quizUsers"), {
        uid: user.uid,
        email: user.email,
        ...additionalData,
      });

      setUser(user);
      setUserData({ email: user.email, ...additionalData, docId: docRef.id });
      return user;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  };

  // 🔹 Login existing user
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      await fetchUserData(userCredential.user.uid);
    } catch (error) {
      console.error("Error signing in:", error);
      throw error;
    }
  };

  // 🔹 Logout function
  const logout = async () => {
   
    await signOut(auth);
    console.log("user logged out")
    setUser(null);
    setUserData(null);
    window.location.href="./"
  };

  // 🔹 Fetch user data from Firestore
  const fetchUserData = async (uid) => {
    try {
      const querySnapshot = await getDocs(collection(db, "quizUsers"));
      const userDoc = querySnapshot.docs.find(doc => doc.data().uid === uid);

      if (userDoc) {
        setUserData({ ...userDoc.data(), docId: userDoc.id });
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // 🔹 Get all users from Firestore
  const getAllUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "quizUsers"));
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error("Error fetching all users:", error);
      throw error;
    }
  };

  // 🔹 Update user data in Firestore
  const updateUser = async (docId, newData) => {
    try {
      const userRef = doc(db, "quizUsers", docId);
      await updateDoc(userRef, newData);
      setUserData(prev => ({ ...prev, ...newData }));
    } catch (error) {
      console.error("Error updating user data:", error);
      throw error;
    }
  };

  // 🔹 Delete user from Firestore
  const deleteUser = async (docId) => {
    try {
      await deleteDoc(doc(db, "quizUsers", docId));
      setUserData(null);
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, userData, loading, register, login, logout, 
        fetchUserData, getAllUsers, updateUser, deleteUser 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use Auth Context
export const useAuth = () => useContext(AuthContext);
