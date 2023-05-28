import { createContext } from "react";

export interface IUser {
  loading: boolean;
  loggedIn: boolean;
}

export type AppContextType = {
  user: IUser;
  updateUser: (newUser: IUser) => void;
};

export const AppContext = createContext<AppContextType | null>(null);
