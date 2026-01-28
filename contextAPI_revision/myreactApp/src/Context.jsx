import {createContext, useState} from 'react';
//created the context
const Mycontext = createContext();

const MycontextProvider = ({children})=>{
    const [myState,setMyState] = useState("my context state!");

    return(
        <Mycontext.Provider value={{myState,setMyState}}>
            {children}
        </Mycontext.Provider>
    )
}

export {Mycontext, MycontextProvider} 
