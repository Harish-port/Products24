// import AdminLogin from "../pages/AdminPanel/AdminLogin/AdminLogin";
import Error404 from "../maintainence/404";
import AdminDashboard from "../pages/AdminPanel/AdminDashboard/AdminDashboard";
import AdminLogin from "../pages/AdminPanel/AdminLogin/AdminLogin";
// import AdminDashboard from "../pages/AdminPanel/AdminDashboard/AdminDashboard";

const AdminRoutes = {
  path: "/",
  children: [
    {
      path: "/admin",
      element: <AdminLogin />,
      errorElement: <Error404 />,
    },
    {
      path: "/dashboard",
      element: <AdminDashboard />,
      errorElement: <Error404 />,
    },
  ],
};
export default AdminRoutes;
