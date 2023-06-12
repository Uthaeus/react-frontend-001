
function UserDetailComponent({ type, data, closeHandler }) {

    return (
        <div className="user-detail-component-container user-detail-component-container-hide">
            <h1>User Detail Component</h1>

            <button onClick={closeHandler}>Close</button>
        </div>
    );
}

export default UserDetailComponent;