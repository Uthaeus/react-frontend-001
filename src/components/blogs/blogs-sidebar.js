
function BlogsSidebar({ filterHandler }) {

    return (
        <div className='blogs-sidebar-wrapper'>
            <h2 className="categories-title">Blog Categories</h2>
            <div className="categories-list-wrapper">
                <p className="categories-list-item">All</p>
                <p className="categories-list-item">javascript</p>
                <p className="categories-list-item">ruby</p>
                <p className="categories-list-item">python</p>
                <p className="categories-list-item">css</p>
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