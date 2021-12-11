import react, { useContext, useState } from "react";
//import UserContext
import { UserContext } from "../../utils/UserContext";
import { useForm } from "react-hook-form";

const Login = () => {
    //useContext
    const { user, setUser } = useContext(UserContext);

    //useform
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
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
                        message: "Password must be at least 8 characters long",
                    },
                    maxLength: {
                        value: 32,
                        message: "Password must be at most 32 characters long",
                    },
                })}
            />
            {errors.password?.message}
            <button type="submit">Submit</button>
        </form>
    );
};

export default Login;
