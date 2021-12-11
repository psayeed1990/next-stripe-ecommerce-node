import react, { useContext, useState } from "react";
//import UserContext
import { UserContext } from "../../utils/UserContext";
import { useForm } from "react-hook-form";

const Registration = () => {
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

            <input
                placeholder="First Name"
                {...register("firstName", {
                    required: "First Name is required",
                    minLength: {
                        value: 8,
                        message:
                            "First Name must be at least 2 characters long",
                    },
                    maxLength: {
                        value: 32,
                        message:
                            "First Name must be at most 32 characters long",
                    },
                })}
            />
            {errors.firstName?.message}

            <input
                placeholder="Last Name"
                {...register("lastName", {
                    required: "Last Name is required",
                    minLength: {
                        value: 8,
                        message: "Last Name must be at least 8 characters long",
                    },
                    maxLength: {
                        value: 32,
                        message: "Last Name must be at most 32 characters long",
                    },
                })}
            />
            {errors.lastName?.message}

            <input
                placeholder="Phone"
                {...register("phone", {
                    required: "Phone is required",
                })}
            />
            {errors.phone?.message}

            <input
                placeholder="Address"
                {...register("address", {
                    required: "Address is required",
                })}
            />
            {errors.address?.message}

            <input
                placeholder="City"
                {...register("city", {
                    required: "City is required",
                })}
            />
            {errors.city?.message}

            <input
                placeholder="State"
                {...register("state", {
                    required: "State is required",
                })}
            />
            {errors.state?.message}

            <input
                placeholder="Zip"
                {...register("zip", {
                    required: "Zip is required",
                })}
            />
            {errors.zip?.message}

            <button type="submit">Submit</button>
        </form>
    );
};

export default Registration;
