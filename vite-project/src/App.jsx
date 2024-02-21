// Importing the main router component
import AppRouter from '../src/routers/AppRouter';

// Functional component representing the root of the application
function App() {
  // Rendering the AppRouter component within a div
  return (
    <div>
      <AppRouter/> {/* Rendering the main router */}
    </div>
  );
}

// Exporting the App component as the default export
export default App;
