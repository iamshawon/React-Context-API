import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Abu Hosen Shawon",
      email: "shawon.diuswe@gmail.com",
      phone: "+88001781003695",
      position: "FrontEnd Dev",
      salary: 25000,
    },
    {
      id: 2,
      name: "Seth Rollins",
      email: "seth@gmail.com",
      phone: "+88001581003695",
      position: "BackEnd Dev",
      salary: 20000,
    },
    {
      id: 3,
      name: "Shawn Micheals",
      email: "shawn@gmail.com",
      phone: "+88001981003695",
      position: "FullStack Dev",
      salary: 50000,
    },
  ]);

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};
