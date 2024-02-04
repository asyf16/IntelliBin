import React, {useState} from 'react';
const initialState={
    loggedin: 'no',
    character: '0',
    today: '0',
    total: '0',
    capacity: '0',
    username: 'User not logged in',
    coins: '0',
    got: [1,0,0,0]
}

export const Context = React.createContext();
const Store = ({children}) =>{
    const[state, setState] = useState(initialState);
    return(
        <Context.Provider value={[state,setState]}>{children}</Context.Provider>
    )
}

export default Store;