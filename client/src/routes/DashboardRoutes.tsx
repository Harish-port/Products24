// import AdminLogin from "../pages/AdminPanel/AdminLogin/AdminLogin";
import Error404 from "../maintainence/404";
import AdminDashboard from "../pages/AdminPanel/AdminDashboard/AdminDashboard";
// import AdminDashboard from "../pages/AdminPanel/AdminDashboard/AdminDashboard";

const DashboardRoutes = {
  path: "/",
  children: [
    {
      path: "/dashboard",
      element: <AdminDashboard />,
      errorElement: <Error404 />,
    },
  ],
};
export default DashboardRoutes;
