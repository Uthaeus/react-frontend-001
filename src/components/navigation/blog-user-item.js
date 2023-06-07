import { NavLink } from 'react-router-dom';

import image from '../../assets/images/placeholder-sm.png';

function BlogUserItem({ user }) {

    let avatar = user.avatar.url ? `http://localhost:4000${user.avatar.url}` : image;

    return (
        <NavLink to="/user-page" className={({isActive}) => isActive ? "blog-nav-user-item blog-user-item-active" : "blog-nav-user-item"}>
            <div className="user-avatar-wrapper">
                <img src={avatar} alt="user avatar" width='100%' height='30px' />
            </div>

            <div className="user-name-wrapper">
                <span className="user-name">{user.username}</span>
            </div>
        </NavLink>
    );
}

export default BlogUserItem;