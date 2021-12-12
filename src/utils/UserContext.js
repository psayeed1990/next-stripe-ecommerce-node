import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userData = localStorage.getItem("user");

        if (userData) {
            console.log("userData", userData);
            return setUser(userData);
        }

        setUser(null);
    }, []);

    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    );
};
