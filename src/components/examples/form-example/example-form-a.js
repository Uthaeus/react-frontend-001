import { useEffect } from "react";
import { useForm } from "react-hook-form";

function ExampleFormA({ submitHandler}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => submitHandler(data);

    useEffect(() => {
        console.log(errors);
    }, [errors]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="example-form form-a">
            <input type="text" placeholder="First Name" className="form-control mb-2" {...register("firstName", { required: true, maxLength: 20 })} />
            <input type="text" placeholder="Last Name" className="form-control mb-2" {...register("lastName", { required: true, maxLength: 20 })} />
            <input type="text" placeholder="Email" className="form-control mb-2" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
            <input type="tel" placeholder="Mobile Number" className="form-control mb-3" {...register("mobileNumber", { required: true, minLength: 6, maxLength: 12 })} />
            <button type="submit" className="form-btn">Submit</button>
        </form>
    );
}

export default ExampleFormA;