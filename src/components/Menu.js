//import context
import Link from "next/link";
import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { UserContext } from "../utils/UserContext";

const Menu = () => {
    const [user, setUser] = React.useContext(UserContext);

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };
    return (
        <menu>
            <Link href="/">Shop</Link>
            {user ? (
                <Fragment>
                    <h4>Welcome {user["firstName"]}</h4>
                    <Link href="/products/create">Create Product</Link>
                    <Link href="/categories/create">Create Category</Link>
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
