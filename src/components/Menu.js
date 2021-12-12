//import context
import React from "react";
import { UserContext } from "../utils/UserContext";

const Menu = () => {
    const { user, setUser } = React.useContext(UserContext);
    const logout = () => {
        setUser(null);
    };
    return (
        <div>
            {user ? (
                <div>
                    <h1>Welcome {user.name}</h1>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <h1>Please login</h1>
            )}
        </div>
    );
};

export default Menu;
