import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {name:'Tom', src:"https://i.pravatar.cc/150?u=a042581f4e29026024d" },
    {name:'Bob', src:"https://i.pravatar.cc/150?u=a042581f4e29026704d" },
    {name:'Lee', src:"https://i.pravatar.cc/150?u=a04258114e29026302d" },
    {name:'Ada', src:"https://i.pravatar.cc/150?u=a042581f4e29026024d" },
    {name:'Amy', src:"https://i.pravatar.cc/150?u=a04258a2462d826712d" },
    {name:'Dan', src:"https://i.pravatar.cc/150?u=a042581f4e29026704d" },
    {name:'Eve', src:"https://i.pravatar.cc/150?u=a04258114e29026302d" },
    {name:'Jay', src:"https://i.pravatar.cc/150?u=a04258114e29026708c" },
    {name:'Tad', src:"https://i.pravatar.cc/150?u=a04258114e29026702d" },
    {name:'Ned', src:"https://i.pravatar.cc/300?u=a042581f4f29026707d" },
    {name:'Taz', src:"https://i.pravatar.cc/300?u=a042581f4e29026710d" },
    {name:'Gil', src:"https://i.pravatar.cc/300?u=a042581f4e29026712d" },
  ]);

  // CRUD functions for users...

  return (
    <UserContext.Provider value={{ users, /* CRUD functions */ }}>
      {children}
    </UserContext.Provider>
  );
};