//import context
import Link from "next/link";
import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { UserContext } from "../utils/UserContext";

const Menu = () => {
    const [user, setUser] = React.useContext(UserContext);
    const logout = async () => {
        await fetch("http://localhost:5000/api/users/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });

        localStorage.removeItem("user");

        setUser(null);
    };
    return (
        <menu>
            <Link href="/">Shop</Link>
            {user ? (
                <Fragment>
                    <h4>Welcome {user["firstName"]}</h4>
                    <Link href="/create-product">Create Product</Link>
                    <a onClick={logout} href="#">
                        Logout
                    </a>
                </Fragment>
            ) : (
                <Fragment>
                    <Link href="/auth/login">Login</Link>
                    <Link href="/auth/registration">Register</Link>
                </Fragment>
            )}
        </menu>
    );
};

export default Menu;
