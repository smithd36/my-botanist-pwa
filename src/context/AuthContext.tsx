'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axiosInstance from '@/utils/axios';
import { AuthContextType, User } from '@/types/auth';
import { getAuthToken, setAuthToken, removeAuthToken } from '@/utils/authToken';
import { useRouter } from 'next/navigation';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  // Fetch user data on initial load if token is available
  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      axiosInstance.get('/users/me')
        .then(response => {
          setUser(response.data.user);
          router.push('/plants'); // Redirect to /plants if user is authenticated
        })
        .catch(error => {
          console.error('Error fetching user:', error.message);
          removeAuthToken(); // Remove invalid token
        });
    }
  }, [router]);

  const login = async (email: string, password: string) => {
    try {
      const response = await axiosInstance.post('/users/login', { email, password });
      setAuthToken(response.data.token); // Save token to local storage or cookie
      setUser(response.data.user);
      router.push('/plants'); // Redirect to /plants after login
    } catch (error: any) {
      console.error('Login error:', error.message);
      throw new Error(error.response?.data?.error || 'Login failed');
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      const response = await axiosInstance.post('/users/register', { name, email, password });
      setAuthToken(response.data.token); // Save token to local storage or cookie
      setUser(response.data.user);
      router.push('/plants'); // Redirect to /plants after registration
    } catch (error: any) {
      console.error('Registration error:', error.message);
      throw new Error(error);
    }
  };

  const logout = () => {
    setUser(null);
    removeAuthToken(); // Remove token from local storage or cookie
    router.push('/login'); // Redirect to /login after logout
    // Clear JWT cookie or any other logout logic
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
