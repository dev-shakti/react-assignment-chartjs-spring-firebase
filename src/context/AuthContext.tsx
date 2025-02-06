import {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";

import { onAuthStateChanged, signInWithPopup, signOut, User } from "firebase/auth";
import { auth, provider } from "../firebase";

// Define types
interface AuthContextType {
  user: User | null;
  signInWithGoogle: () => void;
  signOutUser: () => void;
}

//create context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

//auth provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [user, setUser] = useState<User | null>(null);

  // Handle Google Sign-In
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  // Handle Google Sign-out
  const signOutUser = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  // Track Auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};


