import React from 'react';
import { useNavigate } from 'react-router-dom';


const App = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Remote Application</h1>
      <button onClick={() => navigate("/")}>
        Go to Home
      </button>
    </>
  )
}
  
  export default App