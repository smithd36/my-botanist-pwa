export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  date_created?: string;
}

export interface UserCredentials {
  email: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}
