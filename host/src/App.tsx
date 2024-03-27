// React
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// Components
import Layout from './Layout';
import RemoteApp from 'remoteApp/RemoteApp';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index:true,
        element: <div>Home</div>
      },
      {
        path: "route1",
        element: <h1>Route 1</h1>
      },
      {
        path: "remote",
        element: <RemoteApp />,
      },
    ],
  },
]);


const App = () => {

  return <RouterProvider router={router} />;
}
  
export default App