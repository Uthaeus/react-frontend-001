import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const userCtx = useContext(UserContext);

    function buildForm(data) {
        let formData = new FormData();

        formData.append("user[username]", data.username);
        formData.append("user[email]", data.email);
        formData.append("user[password]", data.password);
        formData.append("user[password_confirmation]", data.password_confirmation);

        if (data.avatar[0]) {
            formData.append("user[avatar]", data.avatar[0]);
        }

        return formData;
    }

    const onSubmit = (data) => {
        fetch('http://localhost:4000/users', {
            method: 'POST',
            body: buildForm(data)
        })
        .then(response => {
            if (response.ok) {
                let token = response.headers.get('Authorization').split(' ')[1];
                localStorage.setItem('practice-token', token);
                return response.json();
            }
        })
        .then(data => {
            userCtx.loginUser(data.data);
            navigate('/');
        })
        .catch(error => console.log('sign up error', error));
    };

    return (
        <div className="auth-container">
            <h1 className="auth-title">Sign Up</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
                <div className="form-group mb-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" {...register("email", { required: true })} />
                    {errors?.email && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" {...register("username", { required: true })} />
                    {errors?.username && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="avatar">Avatar</label>
                    <input type="file" className="form-control" {...register("avatar")} />
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" {...register("password", { required: true })} />
                    {errors?.password && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="password_confirmation">Password Confirmation</label>
                    <input type="password" className="form-control" {...register("password_confirmation", { required: true })} />
                    {errors?.password_confirmation && <span className="text-danger">This field is required</span>}
                </div>

                <button type="submit" className="auth-btn mb-2">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;