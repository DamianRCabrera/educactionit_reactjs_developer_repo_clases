import React from "react";
import { useRoutes } from "react-router-dom";
import Wrapper from "./Components/Navbar/Wrapper";
import Inicio from "./Pages/Inicio";
import Admin from "./Pages/Admin";

const IndexPage = Wrapper(Inicio);
const AdminPage = Wrapper(Admin);

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <IndexPage />,
    },
    {
      path: "/admin",
      element: <AdminPage />,
    },
    {
      path: "/admin/:name",
      element: <AdminPage />,
    },
  ]);
  return routes;
};

export default Routes;
