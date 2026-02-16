import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Redirect to static landing page
    window.location.href = '/landing.html';
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <p>Loading Big Wheels Car Rentals...</p>
    </div>
  );
}

export default App;
