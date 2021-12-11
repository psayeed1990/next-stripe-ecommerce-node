import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoader(true);
                const token = localStorage.getItem("token");

                if (token) {
                    const data = await fetch(
                        `http://localhost:5000/api/auth/authenticate`,
                        {
                            method: "POST",
                            credentials: "include",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ token }),
                        }
                    );

                    data.json().then((datas) => {
                        setUser(datas);
                    });
                }
            } catch (err) {
                setUser(null);
            }
        };

        fetchData();
    }, []);

    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    );
};
