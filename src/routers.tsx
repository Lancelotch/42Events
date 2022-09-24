import { Suspense, lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

import SuspenseLoader from "./components/SuspenseLoader";
import { EVENTS } from "./const-route";
import BaseLayout from "./layouts/BaseLayout";

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const Events = Loader(lazy(() => import("./pages/Events")));

const routes = (): RouteObject[] => {
  return [
    {
      path: "",
      element: <BaseLayout />,
      children: [
        {
          path: "/",
          element: <Navigate to={EVENTS} replace />,
        },
        {
          path: "/events",
          element: <Events />,
        },
      ],
    },
  ];
};

export default routes;
