import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./landing page/LandingPage";
import LoginForm from "./LoginForm";
import ServicesNearby from "./Explore Services/ServicesNearby";
import SignUp from "./SignUp";

function App() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Define the URL of your PHP script
    const apiUrl = '/path/to/db_connect.php';

    // Make a GET request
    fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          setIsConnected(true); // Set the state to indicate a successful connection
          return response.json(); // Assuming your PHP script returns JSON
        }
        throw new Error('Network response was not ok.');
      })
      .then((data) => {
        // Handle the response data here
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []); // The empty dependency array ensures that this code runs once when the component mounts

  return (
    <Router>
      <div>
        {isConnected ? (
          // Render your components or UI when the connection is successful
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/explore-services" element={<ServicesNearby />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signup/login" element={<LoginForm />} />

            {/* Add more routes here */}
          </Routes>
        ) : (
          // Render a loading indicator or error message when the connection fails
          <div>Loading or Connection Failed...</div>
        )}
      </div>
    </Router>
  );
}

export default App;
