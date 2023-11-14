"use client";

import { createContext } from "react";
const uniqueId = parseInt(Date.now() * Math.random()).toString();

export const UserContext = createContext(null);

export default function UserProvider({ children }) {

  return (
    <UserContext.Provider value={uniqueId}>{children}</UserContext.Provider>
  );
}
