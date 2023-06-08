import { useForm } from "react-hook-form";

function BlogCommentForm({ submitHandler }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <div className="form-group">
                <label htmlFor="body">Body</label>
                <textarea className="form-control" rows={4} {...register('body', { required: true })} />
                {errors?.body && <span className="error-message">This field is required</span>}
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default BlogCommentForm;