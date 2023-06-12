import { useEffect } from "react";
import { useForm } from "react-hook-form";

function ExampleFormB({ submitHandler}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => submitHandler(data);

    useEffect(() => {
        console.log(errors);
    }, [errors]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="example-form form-b">
            <div className="row">
                <div className="form-group col-md-6 mb-2">
                    <input type="text" placeholder="First Name" className="form-control" {...register("firstName", { required: true, maxLength: 20 })} />
                </div>
                <div className="form-group col-md-6 mb-2">
                    <input type="text" placeholder="Last Name" className="form-control" {...register("lastName", { required: true, maxLength: 20 })} />
                </div>

                <div className="form-group col-md-6 mb-2">
                    <input type="text" placeholder="Email" className="form-control" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                </div>

                <div className="form-group col-md-6 mb-2">
                    <input type="tel" placeholder="Mobile Number" className="form-control" {...register("mobileNumber", { required: true, minLength: 6, maxLength: 12 })} />
                </div>

                <div className="form-group col-md-8 mb-2">
                    <input type="text" placeholder="Address" className="form-control" {...register("address", { required: true, maxLength: 100 })} />
                </div>

                <div className="form-group col-md-4 mb-2">
                    <input type="text" placeholder="City" className="form-control" {...register("city", { required: true, maxLength: 20 })} />
                </div>

                <div className="form-group col-md-8 mb-2">
                    <input type="text" placeholder="Address 2" className="form-control" {...register("address2", { required: false, maxLength: 100 })} />
                </div>

                <div className="form-group col-md-2 mb-2">
                    <input type="text" placeholder="Zip" className="form-control" {...register("zip", { required: true, maxLength: 20 })} />
                </div>

                <div className="form-group col-md-2 mb-2">
                    <input type="text" placeholder="State" className="form-control" {...register("state", { required: true, maxLength: 20 })} />
                </div>
            </div>

            
            <button type="submit" className="form-btn w-25 mt-3">Submit</button>
        </form>
    );
}

export default ExampleFormB;