// userContext.ts
import { createContext, useContext } from 'react';

export interface User {
  login: string;
  id: number;
  name: string;
  surname: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User) => void;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export const useUser = () => useContext(UserContext);

export default UserContext;
