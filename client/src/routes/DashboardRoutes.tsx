// import AdminLogin from "../pages/AdminPanel/AdminLogin/AdminLogin";
import Error404 from "../maintainence/404";
import AdminDashboard from "../pages/AdminPanel/AdminDashboard/AdminDashboard";
import Overview from "../pages/AdminPanel/Overview/Overview";
import ProductList from "../pages/AdminPanel/ProductList/ProductList";
import Settings from "../pages/AdminPanel/Settings/Settings";
import Team from "../pages/AdminPanel/Team/Team";

const DashboardRoutes = {
      path: "/dashboard",
      element: <AdminDashboard />,
      errorElement: <Error404 />,
      children: [
        {
          path: "/dashboard/overview",
          element: <Overview />,
          errorElement: <Error404 />,
        },
        {
          path: "/dashboard/productList",
          element: <ProductList />,
          errorElement: <Error404 />,
        },
        {
          path: "/dashboard/team",
          element: <Team />,
          errorElement: <Error404 />,
        },
        {
          path: "/dashboard/settings",
          element: <Settings />,
          errorElement: <Error404 />,
        },
      ],
};
export default DashboardRoutes;
