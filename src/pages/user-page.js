import { useContext, useState } from "react";

import image from '../assets/images/placeholder-sm.png';

import { UserContext } from "../store/user-context";
import UserEdit from "../components/auth/user-edit";
import UserDetailComponent from "../components/userpage/user-detail-component";

function UserPage() {
    const { user, loginUser, likedQuotes, comments, blogs } = useContext(UserContext);
    const [showDetail, setShowDetail] = useState(false);
    const [detailData, setDetailData] = useState(null);
    const [detailType, setDetailType] = useState(null);

    let avatar = user?.avatar?.url ? `http://localhost:4000${user.avatar.url}` : image;

    function closeDetailHandler() {
        let element = document.querySelector('.user-detail-component-container');
        element.classList.add('user-detail-component-container-hide');

        setTimeout(() => {
            element.classList.remove('user-detail-component-container-show');

            setShowDetail(false);
            setDetailData(null);
            setDetailType(null);
        }, 400);

        
    }

    function showDetailHandler(type) {
        let element = document.querySelector('.user-detail-component-container');
        element.classList.add('user-detail-component-container-show');

        setDetailType(type);
        let dataForDetail = type === 'comments' ? comments : type === 'blogs' ? blogs : likedQuotes;
        setDetailData(dataForDetail);

        setTimeout(() => {
            element.classList.remove('user-detail-component-container-hide');
        }, 400);

        setShowDetail(true);
    }

    function userUpdateHandler(data) {
        console.log('update user', data);
        loginUser(data);
        showFormHandler();
    }

    function showFormHandler() {
        let element = document.querySelector('.user-edit-container');
        element.classList.toggle('user-edit-slide');
    }

    return (
        <div className="user-page-container">
            <UserDetailComponent type={detailType} data={detailData} closeHandler={closeDetailHandler} />
            <div className="user-wrapper">
                <div className="user-info-wrapper">
                    <h1 className="user-info-username">{user.username}</h1>
                    <h2 className="user-info-email">{user.email}</h2>

                    <div className="user-info-item">
                        <p className="info-item">user created: <span className="info-item-span created-at">{user.created_at.split('T')[0]}</span></p>
                    </div>
                    <div className="user-info-item">
                        <p className="info-item">user updated: <span className="info-item-span updated-at">{user.updated_at.split('T')[0]}</span></p>
                    </div>
                    <div className="user-info-item">
                        <p className="info-item">comments: <span onClick={() => showDetailHandler('comments')} className="info-item-span comments-link">{comments?.length} comments</span></p>
                    </div>
                    <div className="user-info-item">
                        <p className="info-item">blogs: <span onClick={() => showDetailHandler('blogs')} className="info-item-span blogs-link">{blogs?.length} blogs</span></p>
                    </div>
                    <div className="user-info-item">
                        <p className="info-item">liked quotes: <span onClick={() => showDetailHandler('liked_quotes')} className="info-item-span liked-quotes-link">{likedQuotes?.length} likes</span></p>
                    </div>

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