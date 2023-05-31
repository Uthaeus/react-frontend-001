import { NavLink } from 'react-router-dom';

import image from '../../assets/images/placeholder-sm.png';

function NavUserItem({ user }) {

    let avatar = user.avatar ? `http://localhost:4000${user.avatar.url}` : image;

    return (
        <NavLink to="/user-page" className={({isActive}) => isActive ? "nav-user-item user-item-active" : "nav-user-item"}>
            <div className="user-avatar-wrapper">
                <img src={avatar} alt="user avatar" width='100%' />
            </div>

            <div className="user-name-wrapper">
                <span className="user-name">{user.username}</span>
            </div>
        </NavLink>
    );
}

export default NavUserItem;