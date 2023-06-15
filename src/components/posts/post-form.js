import { useForm } from "react-hook-form";
import { useEffect } from "react";

function PostForm({ post }) {
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        if (post) {
            reset(post);
        }
    }, [post, reset]);

    function submitHandler(data) {
        console.log(data);
    }

    return (
        <form className="post-form" onSubmit={handleSubmit(submitHandler)}>
            <div className="form-group">
                <textarea className="form-control" {...register("body")} />
            </div>
            <div className="form-group">
                <input type='file' className="form-control" {...register("image")} />
            </div>

            <button type="submit" className="post-form-btn">Submit</button>
        </form>
    );
}

export default PostForm;