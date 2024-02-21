// Import necessary components and libraries from React and react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import custom components
import HeaderNav from '../components/HeaderNav'; // Header navigation component
import Footer from '../components/Footer'; // Footer component
import PageHome from '../pages/PageHome'; // Home page component
import PageAbout from '../pages/PageAbout'; // About page component
import PageDetails from '../pages/PageDetails'; // Movie details page component
import PageFavorites from '../pages/PageFavorites'; // Favorites page component
import PageWatchList from '../pages/PageWatchList'; // Watchlist page component
import PageNotFound from '../pages/PageNotFound'; // 404 Not Found page component

// AppRouter component definition
function AppRouter() {
  return (
    <Router>
      <div className="wrapper"> {/* Main wrapper */}
        <HeaderNav /> {/* Header navigation */}
        <main> {/* Main content area */}
          <Routes> {/* Router component for defining routes */}
            <Route path="/" element={<PageHome />} /> {/* Route for Home page */}
            <Route path="/about" element={<PageAbout />} /> {/* Route for About page */}
            <Route path="/movie/:id" exact element={<PageDetails />} /> {/* Route for Movie details page */}
            <Route path="/favorites" element={<PageFavorites />} /> {/* Route for Favorites page */}
            <Route path="/watchlist" element={<PageWatchList />}/> {/* Route for Watchlist page */}
            <Route path="*" element={<PageNotFound />} /> {/* Route for 404 Not Found page */}
          </Routes>
        </main>
        <Footer /> {/* Footer */}
      </div>
    </Router>
  );
}

// Export the AppRouter component
export default AppRouter;
