import { useState, useEffect } from 'react';

function BlogsSidebar({ filterHandler }) {
    const [categories, setCategories] = useState([]);
    const [currentFilter, setCurrentFilter] = useState('All');

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

    function categoryClickHandler(category) {
        setCurrentFilter(category);
        if (filterHandler) {
            filterHandler(category);
        }
    }

    function resetCategories() {
        setCurrentFilter('All');
        if (filterHandler) {
            filterHandler('All');
        }
    }

    return (
        <div className='blogs-sidebar-wrapper'>
            <h2 className="categories-title">Blog Categories</h2>
            <div className="categories-list-wrapper">
                <p onClick={resetCategories} className={`categories-list-item ${currentFilter === 'All' && 'list-item-active'}`}>All</p>
                {categories.map(category => (
                    <p onClick={() => categoryClickHandler(category.title)} key={category.id} className={`categories-list-item ${currentFilter === category.title && 'list-item-active'}`}>{category.title}</p>
                ))}
            </div>

            <h2 className="socials-title">Homerj's Socials</h2>
            <div className="socials-list-wrapper">
                <a className='blog-sidebar-social-link' target='_blank' href="www.example.com">
                    <i className="bi bi-facebook"></i>
                </a>
                <a className='blog-sidebar-social-link' target='_blank' href="www.example.com">
                    <i className="bi bi-instagram"></i>
                </a>
                <a className='blog-sidebar-social-link' target='_blank' href="www.example.com">
                    <i className="bi bi-twitter"></i>
                </a>
                <a className='blog-sidebar-social-link' target='_blank' href="www.example.com">
                    <i className="bi bi-linkedin"></i>
                </a>
                <a className='blog-sidebar-social-link' target='_blank' href="www.example.com">
                    <i className="bi bi-github"></i>
                </a>
                <a className='blog-sidebar-social-link' target='_blank' href="www.example.com">
                    <i className="bi bi-youtube"></i>
                </a>
            </div>
        </div>
    );
}

export default BlogsSidebar;