import { useForm } from "react-hook-form";

function UserEdit({ user, userUpdateHandler }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: user 
    });

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
        console.log('user edit submit data:', data);

        fetch(`http://localhost:4000/users/${user.id}`, {
            method: "PUT",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('practice-token')}`
            },
            body: buildForm(data)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .then(data => {
            userUpdateHandler(data.data);
            reset();
        })
        .catch(error => console.log('edit user error:', error));
    };

    return (
        <div className="user-edit-container">
            <form onSubmit={handleSubmit(onSubmit)} className="user-edit-form">
                <div className="form-group mb-2">
                    <label htmlFor="username">Username</label>
                    <input type="text" {...register("username", { required: true })} className="form-control" />
                    {errors?.username && <span className="error-message">This field is required</span>}
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="email">Email</label>
                    <input type="text" {...register("email", { required: true })} className="form-control" />
                    {errors?.email && <span className="error-message">This field is required</span>}
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="avatar">Avatar</label>
                    <input type="file" {...register("avatar")} className="form-control" />
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="current_password">Current Password</label>
                    <input type="text" {...register("current_password", { required: true })} className="form-control" />
                    {errors?.current_password && <span className="error-message">This field is required</span>}
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="password">Password</label>
                    <input type="text" {...register("password", { required: true })} className="form-control" />
                    {errors?.password && <span className="error-message">This field is required</span>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="password_confirmation">Confirm Password</label>
                    <input type="text" {...register("password_confirmation", { required: true })} className="form-control" />
                    {errors?.password_confirmation && <span className="error-message">This field is required</span>}
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default UserEdit;    