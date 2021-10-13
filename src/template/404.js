import { Link } from "react-router-dom";
const NotFound = () => {
    return (  
        <div className="tmp-body">
            <div className="error">sorry but the Link could not be found</div>
            <Link to="/" className="btn">Go Back to Home</Link>
        </div>
    );
}
 
export default NotFound;