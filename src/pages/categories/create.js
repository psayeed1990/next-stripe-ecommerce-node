import react, { useContext, useState } from "react";
//import UserContext
import { UserContext } from "../../utils/UserContext";
import { useForm } from "react-hook-form";
import Menu from "../../components/Menu";

const CreateCategory = () => {
    const [categrories, categoriesSet] = useState([]);
    //useContext
    const { user, setUser } = useContext(UserContext);

    //useform
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        try {
            fetch("http://localhost:5000/api/categories", {
                method: "POST",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container">
            <Menu />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder=" Name"
                    {...register("name", {
                        required: "Category Name is required",
                        minLength: {
                            value: 2,
                            message:
                                "Category Name must be at least 2 characters long",
                        },
                        maxLength: {
                            value: 32,
                            message:
                                "Category Name must be at most 32 characters long",
                        },
                    })}
                />
                {errors.name?.message}

                <textarea
                    defaultValue="Description"
                    {...register("description", {
                        required: "Description is required",
                        minLength: {
                            value: 2,
                            message:
                                "Description must be at least 2 characters long",
                        },
                        maxLength: {
                            value: 132,
                            message:
                                "Description must be at most 132 characters long",
                        },
                    })}
                ></textarea>
                {errors.description?.message}

                <input
                    placeholder="Slug"
                    {...register("slug", {
                        required: "Slug is required",
                    })}
                />
                {errors.slug?.message}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreateCategory;
