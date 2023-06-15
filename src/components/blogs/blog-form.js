import { useForm } from "react-hook-form";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";

import { UserContext } from "../../store/user-context";

function BlogForm({blog}) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [categories, setCategories] = useState([]);
    const [showCategoryInput, setShowCategoryInput] = useState(false);
    const [newCategory, setNewCategory] = useState('');
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

    useEffect(() => {
        fetch('http://localhost:4000/categories')
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        .then(data => setCategories(data))
        .catch(err => console.log('error fetching categories', err));
    }, []);

    function createNewCategory() {
        let catData = {
            category: {
                title: newCategory.toLowerCase(),
                user_id: user.id,
            }
        };

        fetch('http://localhost:4000/categories', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('practice-token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(catData),
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        .then(data => {
            console.log('new category created', data);
            setCategories([data, ...categories]);
        })
        .catch(err => console.log('error creating category', err));

        setNewCategory('');
        setShowCategoryInput(false);
    }

    function submitHandler(data) {
        console.log('blog form submit', data);

        let dataToSend = {
            blog: {
                title: data.title,
                body: data.body,
                user_id: user.id,
                category_id: data.category_id,
            }
        }
        fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('practice-token')}`,
            },
            body: JSON.stringify(dataToSend),
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

    function newCategoryChangeHandler(e) {
        setNewCategory(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <div className="form-group mb-4">
                <label htmlFor="title">Title</label>
                <input type='text' className="form-control" {...register('title', { required: true })} />
                {errors?.title && <span className="error-message">This field is required</span>}
            </div>

            <div className="form-group mb-4">
                <label htmlFor="category">Category</label>
                <select className="form-control" {...register('category_id')}>
                    <option value="">Select a category</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.title}</option>
                    ))}
                </select>
                {!showCategoryInput && <p className="category-toggle" onClick={() => setShowCategoryInput(!showCategoryInput)}>Add a new category</p>}
                {showCategoryInput && (
                    <div className="new-category-wrapper">
                        <button className="new-category-close" onClick={() => setShowCategoryInput(!showCategoryInput)}>X</button>
                        <button disabled={categories.includes(newCategory.toLowerCase()) || newCategory.length === 0} onClick={createNewCategory} className="new-category-create">O</button>
                        <input type="text" className="form-control" placeholder="Enter new Category" value={newCategory} onChange={newCategoryChangeHandler} />
                    </div>
                )}
            </div>

            <div className="form-group mb-5">
                <label htmlFor="body">Body</label>
                <textarea className="form-control" rows={8} {...register('body', { required: true })} />
                {errors?.body && <span className="error-message">This field is required</span>}
            </div>

            <button type="submit" className="btn btn-primary w-25">Save</button>
        </form>
    );
}

export default BlogForm;