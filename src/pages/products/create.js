import react, { useContext, useEffect, useState } from "react";
//import UserContext
import { UserContext } from "../../utils/UserContext";
import { useForm } from "react-hook-form";
import Menu from "../../components/Menu";

const Create = () => {
    const [categrories, categoriesSet] = useState([]);
    //useContext
    const { user, setUser } = useContext(UserContext);

    //useEffect to get categories
    useEffect(() => {
        fetch("http://localhost:5000/api/categories")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                categoriesSet(data.data.data);
            });
    }, []);

    //useform
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        fetch("http://localhost:5000/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                withCredentials: true,
            },
            body: JSON.stringify(data),
        });
        console.log(data);
    };

    return (
        <div className="container">
            <Menu />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder=" Name"
                    {...register("name", {
                        required: "Product Name is required",
                        minLength: {
                            value: 2,
                            message:
                                "Product Name must be at least 2 characters long",
                        },
                        maxLength: {
                            value: 32,
                            message:
                                "Product Name must be at most 32 characters long",
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
                    placeholder="Price"
                    {...register("price", {
                        required: "Price is required",
                    })}
                />
                {errors.price?.message}

                <select
                    {...register("category", {
                        required: "Category is required",
                    })}
                >
                    {categrories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                {errors.category?.message}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Create;
