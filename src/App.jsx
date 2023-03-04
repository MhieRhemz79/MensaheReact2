
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import Dashboard from './components/DataPlane/ControlPanel/Dashboard';
import Support from './components/DataPlane/ControlPanel/Support';
import Inbox from './components/DataPlane/ControlPanel/Inbox';
import Goals from './components/DataPlane/ControlPanel/Goals';
import Layout from './components/DataPlane/ControlPanel/Layout';
import Statistics from './components/DataPlane/ControlPanel/Statistics';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:
      [
        {path: "/", element: <Dashboard />},
        {path: "/statistics", element: <Statistics/> },
        {path: "/support", element: <Support/> },
        {path: "/inbox", element: <Inbox/> },
        {path: "/goals", element: <Goals/> }
      ],
      
    },
]);

  return  <RouterProvider router={router} />;
}

export default App
