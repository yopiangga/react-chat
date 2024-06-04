import { createContext, useState } from "react";
import { User } from "src/types/user";
import React from "react";

interface UserContextType {
  users: User[];
  initUsers: (users: User[]) => void;
  addUser: (user: User) => void;
  editUser: (id: string, updatedUser: User) => void;
  deleteUser: (id: string) => void;
}

export const UserContext = createContext<UserContextType>({
  users: [] as User[],
  initUsers: (users: User[]) => {},
  addUser: (user: User) => {},
  editUser: (id: string, updatedUser: User) => {},
  deleteUser: (id: string) => {},
});

interface Props {
  children: React.ReactElement;
}

export const UserProvider: React.FC<Props> = ({
  children,
}): React.ReactElement => {
  const [users, setUsers] = useState<User[]>([]);

  const initUsers = (users: User[]) => {
    setUsers([...users]);
  };

  const addUser = (user: User) => {
    setUsers([...users, user]);
  };

  const editUser = (id: string, updatedUser: User) => {
    setUsers(users.map((user: User) => (user.id === id ? updatedUser : user)));
  };

  const deleteUser = (id: string) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <UserContext.Provider
      value={{ users, initUsers, addUser, editUser, deleteUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
