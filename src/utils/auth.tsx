import axiosInstance from "@/utils/axios";

export async function register(email: string, password: string) {
    try {
      const response = await axiosInstance.post('/users/register', { email, password });
      return response.data;
    } catch (error: any) {
      console.error('Registration error:', error.message);
      throw new Error(error.response?.data?.error || 'Registration failed');
    }
  }

export async function login(email: string, password: string) {
  try {
    const response = await axiosInstance.post('/users/login', { email, password });
    return response.data;
  } catch (error: any) {
    console.error('Login error:', error.message);
    throw new Error(error.response?.data?.error || 'Login failed');
  }
}