import { Link } from 'react-router-dom';

function ExamplesIndex() {
    return (
        <div>
            <h1>Examples</h1>
            <hr />

            <Link to="/blogs">Blogs</Link>
            <Link to="/examples/form">Form</Link>
            
        </div>
    );
}

export default ExamplesIndex;