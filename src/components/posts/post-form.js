import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";



function PostForm({ post, user }) {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const [method, setMethod] = useState("POST");
    const [url, setUrl] = useState("http://localhost:4000/posts");

    useEffect(() => {
        if (post) {
            reset(post);
            setMethod("PUT");
            setUrl(`http://localhost:4000/posts/${post.id}`);
        }
    }, [post, reset]);

    function buildForm(data) {
        const formData = new FormData();
        formData.append("post[body]", data.body);
        formData.append("post[image]", data.image[0]);
        formData.append("post[user_id]", user.id);
        return formData;
    }

    function submitHandler(data) {
        console.log(data);

        const formData = buildForm(data);

        fetch(url, {
            method,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('practice-token')}`
            },
            body: formData
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        .then(data => {
            console.log('post form data:', data);
            navigate('/posts');
        })
        .catch(error => console.log('post form error:', error));
    }

    return (
        <form className="post-form" onSubmit={handleSubmit(submitHandler)}>
            <div className="form-group">
                <textarea className="form-control my-3" rows={5} {...register("body")} />
            </div>
            <div className="form-group">
                <input type='file' className="form-control mb-4" {...register("image")} />
            </div>

            <button type="submit" className="post-form-btn">Submit</button>
        </form>
    );
}

export default PostForm;