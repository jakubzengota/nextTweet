// UserProvider.tsx
import React, { ReactNode, useState } from 'react';
import UserContext, { User } from './userContext';

interface UserProviderProps {
    children: ReactNode;
}
const UserProvider: React.FC<UserProviderProps> = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  if (user === null) {
    throw new Error('User not found');
  }
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
