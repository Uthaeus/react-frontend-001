import { useEffect } from "react";
import { useForm } from "react-hook-form";

function ExampleFormD({ submitHandler}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => submitHandler(data);

    useEffect(() => {
        console.log(errors);
    }, [errors]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="example-form">
            <input type="text" placeholder="First Name" {...register("firstName", { required: true, maxLength: 20 })} />
            <input type="text" placeholder="Last Name" {...register("lastName", { required: true, maxLength: 20 })} />
            <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
            <input type="tel" placeholder="Mobile Number" {...register("mobileNumber", { required: true, minLength: 6, maxLength: 12 })} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default ExampleFormD;