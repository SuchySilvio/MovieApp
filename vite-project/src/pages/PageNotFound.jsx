// Import the SCSS file for styling
import '../styles/PageNotFound.scss';

// PageNotFound component definition
const PageNotFound = () => {
    return (
        <div className="page-not-found-container">
            <h3>404 - Page Not Found</h3> {/* Display 404 error message */}
            <div className="line"></div> {/* Horizontal line separator */}
            <div className="message">
                <p>The page you are looking for does not exist.</p> {/* Display additional message */}
            </div>
            <div className="line"></div> {/* Horizontal line separator */}
        </div>
    );
};

// Export PageNotFound component
export default PageNotFound;