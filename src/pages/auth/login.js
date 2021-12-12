import react, { useContext, useState } from "react";
//import UserContext
import { UserContext } from "../../utils/UserContext";
import { useForm } from "react-hook-form";
import Menu from "../../components/Menu";

const Login = () => {
    //useContext
    const [user, setUser] = useContext(UserContext);

    //useform
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        //send fetch post request to '/api/users/login'
        //if success, set user to the response
        //if fail, set errors to the response
        const resData = await fetch("http://localhost:5000/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const res = await resData.json();

        if (res.status === "success") {
            localStorage.setItem("user", JSON.stringify(res.data.user));
            setUser(res.data.user);
        } else {
            console.log(res.data.message);
        }
    };

    return (
        <div className="container">
            <Menu />

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Invalid email address format",
                        },
                    })}
                />
                {errors.email?.message}
                <input
                    placeholder="Password"
                    type="password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message:
                                "Password must be at least 8 characters long",
                        },
                        maxLength: {
                            value: 32,
                            message:
                                "Password must be at most 32 characters long",
                        },
                    })}
                />
                {errors.password?.message}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Login;
