import { useContext } from 'react';
import {Mycontext} from './Context.jsx'

const MyComponent = ()=>{
    const {myState, setMyState}= useContext(Mycontext);
    return (
        <div>
            <p>{myState}</p>
            <button onClick={()=>setMyState("hello from component!!!")}>
                update button
            </button>
        </div>
    )
}

export default MyComponent;