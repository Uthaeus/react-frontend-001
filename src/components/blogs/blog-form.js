import { useForm } from "react-hook-form";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";

import { UserContext } from "../../store/user-context";

function BlogForm({blog}) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [method, setMethod] = useState('POST');
    const [url, setUrl] = useState('http://localhost:4000/blogs');
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (blog) {
            reset(blog);
            setMethod('PUT');
            setUrl(`http://localhost:4000/blogs/${blog.id}`);
        }
    }, [blog, reset]);

    function submitHandler(data) {
        console.log('blog form submit', data);
        let dataToSend = {
            blog: {
                title: data.title,
                body: data.body,
                user_id: user.id,
            }
        }
        fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('practice-token')}`,
            },
            body: dataToSend,
        })
        .then(res => {
            if (res.ok) {
                navigate('/blogs');
                return res.json();
            }
        })
        .then(data => console.log(data))
        .catch(err => console.log('error creating blog', err));
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