import Error404 from "../maintainence/404";
import HomePage from "../pages/HomePage/HomePage";

const MainRoutes = {
  path: "/",
  element: <HomePage />,
  errorElement: <Error404 />,
};

export default MainRoutes;
