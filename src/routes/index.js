import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";

// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";

//higher order component to pass components and wrap with Suspense
const Loadable = (Component) => (props) => {
  return (
    //Display a fallback component while page is loading. Needs to be dynamic loading to work (lazy) function
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      //Acts as layout, or parent wrapper for 'children' below
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <GeneralApp /> },
        { path: "chats", element: <Chats /> },
        
        //fallback, display 404
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp")),
);
const Chats = Loadable(
  lazy(() => import("../pages/dashboard/Chats"))
)
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
