import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function SignIn() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const userCtx = useContext(UserContext);

    const onSubmit = (data) => {
        fetch('http://localhost:4000/users/sign_in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: data })
        })
        .then(response => {
            if (response.ok) {
                let token = response.headers.get('Authorization').split(' ')[1];
                localStorage.setItem('practice-token', token);
                return response.json();
            }
        })
        .then(data => {
            console.log('sign in data', data);
            userCtx.loginUser(data);
            navigate('/');
        })
        .catch(error => console.log('sign in error', error));
    };

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