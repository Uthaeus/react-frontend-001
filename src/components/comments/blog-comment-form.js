import { useForm } from "react-hook-form";

function BlogCommentForm({ submitHandler }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    function commentSubmitHandler(data) {
        submitHandler(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(commentSubmitHandler)} className="blog-comment-form-wrapper">
            <div className="form-group">
                <label htmlFor="content">Comment</label>
                <textarea className="form-control mb-2" rows={4} {...register('content', { required: true })} />
                {errors?.body && <span className="error-message">This field is required</span>}
            </div>

            <button type="submit" className="blog-comment-form-btn">Submit</button>
        </form>
    );
}

export default BlogCommentForm;