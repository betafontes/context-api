import { ReactNode, createContext, useState } from 'react';

interface IAuthContextData {
  text: string;
  signIn: () => void;
  user: IUser;
}

interface IUser {
  name: string;
  email: string;
}

interface IAuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContextData);

export function AuthProvider({ children }: IAuthProviderProps) {
  const [user, setUser] = useState({
    name: '',
    email: '',
  });
  const text = `Desenvolvedora Front-End`;

  function signIn() {
    setUser({
      name: 'Roberta Fontes',
      email: 'roberta@teste.com',
    });
  }

  return (
    <AuthContext.Provider value={{ text, signIn, user }}>{children}</AuthContext.Provider>
  );
}
