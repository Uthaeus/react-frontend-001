import { useContext } from "react";

import image from '../assets/images/placeholder-sm.png';

import { UserContext } from "../store/user-context";
import UserEdit from "../components/auth/user-edit";

function UserPage() {
    const { user, loginUser } = useContext(UserContext);

    let avatar = user?.avatar?.url ? `http://localhost:4000${user.avatar?.url}` : image;

    function userUpdateHandler(data) {
        console.log('update user', data);
        loginUser(data);
        showFormHandler();
    }

    function showFormHandler() {
        let element = document.querySelector('.user-edit-container');
        element.classList.toggle('user-edit-slide');
    }

    console.log('user', user);

    return (
        <div className="user-page-container">
            <div className="user-wrapper">
                <div className="user-info-wrapper">
                    <h1 className="user-info-username">{user.username}</h1>
                    <h2 className="user-info-email">{user.email}</h2>
                    <p className="user-info-item">user created: {user.created_at.split('T')[0]}</p>
                    <p className="user-info-item">user updated: {user.updated_at.split('T')[0]}</p>
                    <p className="user-info-item">comments: {user.comments?.length}</p>
                    <p className="user-info-item">posts: {user.posts?.length}</p>
                    <p className="user-info-item">liked quotes: {user.liked_quotes?.length}</p>

                    <button onClick={showFormHandler} className="user-info-edit-btn">Edit</button>
                </div>

                <div className="user-avatar-wrapper">
                    <img src={avatar} alt="user avatar" width='50%' />
                </div>
            </div>

            <UserEdit user={user} userUpdateHandler={userUpdateHandler} />
        </div>
    );
}

export default UserPage;