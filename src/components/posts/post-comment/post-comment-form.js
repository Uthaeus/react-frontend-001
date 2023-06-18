import { useForm } from "react-hook-form";

function PostCommentForm({ user, postId, newCommentHandler}) {
    const { register, handleSubmit, reset } = useForm();

    function submitHandler(data) {
        console.log('data:', data);
        let dataToSend = {
            post_comment: {
                user_id: user.id,
                post_id: postId,
                content: data.content
            }
        };

        fetch('http://localhost:4000/post_comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('practice-token')}`
            },
            body: JSON.stringify(dataToSend)
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        .then(data => newCommentHandler(data))
        .catch(error => console.log('post comment error:', error));
        reset();
    }

    return (
        <div className="post-comment-form mb-1">
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group mb-2">
                    <textarea className="form-control" rows={3} {...register('content', { required: true })} />
                </div>

                <button className="post-comment-form-btn" type="submit">Post</button>
            </form>
        </div>
    );
}

export default PostCommentForm;