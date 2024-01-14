import React, {useState} from 'react';
const initialState={
    loggedin: 'no',
    character: 'Dino',
    today: '16',
    total: '876',
    capacity: '40',
    username: 'EcoLuver',
    coins: '800',
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