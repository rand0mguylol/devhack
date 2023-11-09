'use client'

import { createContext } from 'react';

const UserContext = createContext(null);

export default function UserProvider({props, children}) {
    <UserContext.Provider value={props.user}>
        {children}
    </UserContext.Provider>
}