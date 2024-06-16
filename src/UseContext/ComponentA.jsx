// useContext() = React Hook that allows you to share values
//                between multiple levels of components. 
//                without passing props through each level

// Provider Component
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//       <Child />
//    </MyContext.Provider>

// Consumer Components
// 1. import React, {useContext} from 'react';
//    import { MyContext } from './ComponentA';
// 2. const value = useContext(MyContext);


import React, { useState, createContext } from 'react';
import ComponentB from "./ComponentB"

export const UserContext = createContext();

function ComponentA() {

  const [user, setUser] = useState("Adonis Julio Esteban");

  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2><b>{`Hello ${user}`}</b></h2>

      <UserContext.Provider value={user}>
        <ComponentB user={user}/>
      </UserContext.Provider>

    </div>
  )
}

export default ComponentA