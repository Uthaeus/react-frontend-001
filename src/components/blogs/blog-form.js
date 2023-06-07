import { useForm } from "react-hook-form";
import { useEffect } from "react";

function BlogForm({blog}) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    useEffect(() => {
        if (blog) reset(blog);
    }, [blog, reset]);

    function submitHandler(data) {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type='text' className="form-control" {...register('title', { required: true })} />
                {errors?.title && <span className="error-message">This field is required</span>}
            </div>

            <div className="form-group">
                <label htmlFor="body">Body</label>
                <textarea className="form-control" rows={4} {...register('body', { required: true })} />
                {errors?.body && <span className="error-message">This field is required</span>}
            </div>

            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    );
}

export default BlogForm;