// import AdminLogin from "../pages/AdminPanel/AdminLogin/AdminLogin";
import Error404 from "../maintainence/404";
import UserLogin from "../pages/LoginPage/AdminLogin";
// import AdminDashboard from "../pages/AdminPanel/AdminDashboard/AdminDashboard";

const AdminRoutes = {
  path: "/",
  children: [
    {
      path: "/admin",
      element: <UserLogin />,
      errorElement: <Error404 />,
    },
  ],
};
export default AdminRoutes;
