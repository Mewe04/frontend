import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import AddUser from "../pages/addUser/AddUser";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";
import Family from "../pages/family/Family";
import Services from "../pages/services/Services";
import Reports from "../pages/reports/Reports";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Profile /> },
      { path: "addUser", element: <AddUser /> },
      { path: "family", element: <Family /> },
      { path: "services", element: <Services /> },
      { path: "reports", element: <Reports /> },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default router;
