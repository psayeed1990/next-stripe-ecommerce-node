import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userData = localStorage.getItem("user");

        if (userData) {
            setUser(JSON.parse(userData));
        } else {
            setUser(null);
        }
    }, []);

    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    );
};
