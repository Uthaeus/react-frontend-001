import { NavLink } from 'react-router-dom';

function ExamplesIndex() {
    return (
        <div className='examples-index-container'>
            <h1 className='examples-index-title'>Examples</h1>
            <hr />

            <div className='examples-index-body'>
                <NavLink to="/blogs" className='examples-index-link'>Blogs</NavLink>
                <NavLink to="/examples/form" className='examples-index-link'>Form</NavLink>
            </div>
            
        </div>
    );
}

export default ExamplesIndex;