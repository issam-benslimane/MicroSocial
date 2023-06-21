import { createContext, useContext, useEffect, useState } from "react";
import { User } from "../../users";
import { getLoggedUser } from "../api";

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthContext = {
  user?: User;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
};

const AuthContext = createContext<AuthContext>(Object.create(null));

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    getLoggedUser()
      .then(setUser)
      .catch(() => setUser(undefined));
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);
  if (!value) throw new Error("Use context inside provider");
  return value;
};
