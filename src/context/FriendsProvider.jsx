'use client';
import { createContext, useState } from "react";

export const FriendsContext = createContext();
export const FriendsProvider = ({children}) => {
    

    const [timeline, setTimeline] = useState([]);
    
    const addToTimeline = (name, type, time) => {
        setTimeline([...timeline, {name, type, time}])
    }

    return (
        <FriendsContext.Provider value={{timeline, addToTimeline, setTimeline}}>
            {children}
        </FriendsContext.Provider>
    );
};

export default FriendsProvider;