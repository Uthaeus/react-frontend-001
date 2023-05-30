import { useForm } from "react-hook-form";

function SignIn() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {};

    return (
        <div className="auth-container">
            <h1 className="auth-title">Sign In</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
                <div className="form-group mb-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" {...register("email", { required: true })} />
                    {errors?.email && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" {...register("password", { required: true })} />
                </div>

                <button type="submit" className="auth-btn mb-2">Sign In</button>
            </form>
        </div>
    );
}

export default SignIn;