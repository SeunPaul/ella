import { createContext } from "react";

export interface IUser {
  id: string;
  email: string;
  name: string;
  loggedIn: boolean;
}

export interface ILogin {
  id: string;
  accessToken: string;
  email: string;
  name: string;
}

export type AppContextType = {
  user: IUser;
  login: (data: ILogin) => void;
  logout: () => void;
};

export const AppContext = createContext<AppContextType | null>(null);
