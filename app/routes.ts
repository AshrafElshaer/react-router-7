import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("routes/pages/layout.tsx", [
    route("/dashboard", "routes/pages/server-only.tsx"),
    route("/dashboard/client", "routes/pages/client-only.tsx"),
    route("/dashboard/server-document", "routes/pages/server-document.tsx"),
    route("/dashboard/client-document", "routes/pages/client-document.tsx"),
    route("/dashboard/server-window", "routes/pages/server-window.tsx"),
    route("/dashboard/client-window", "routes/pages/client-window.tsx"),
    route("/dashboard/server-client", "routes/pages/server-client.tsx"),
    route(
      "/dashboard/server-material-ui",
      "routes/pages/server-material-ui.tsx"
    ),
    route(
      "/dashboard/client-material-ui",
      "routes/pages/client-material-ui.tsx"
    ),
    route(
      "/dashboard/server-mui-material",
      "routes/pages/server-mui-material.tsx"
    ),
    route(
      "/dashboard/client-mui-material",
      "routes/pages/client-mui-material.tsx"
    ),
    route(
      "/dashboard/server-breadcrumbs-non-mui",
      "routes/pages/server-breadcrumbs-non-mui.tsx"
    ),
    route(
      "/dashboard/client-breadcrumbs-non-mui",
      "routes/pages/client-breadcrumbs-non-mui.tsx"
    ),
    route(
      "/dashboard/server-breadcrumbs-mui",
      "routes/pages/server-breadcrumbs-mui.tsx"
    ),
    route(
      "/dashboard/client-breadcrumbs-mui",
      "routes/pages/client-breadcrumbs-mui.tsx"
    ),
    route("/dashboard/server-suspense", "routes/pages/server-suspense.tsx"),
    route("/dashboard/client-suspense", "routes/pages/client-suspense.tsx"),
      route("/dashboard/client-light-gallary", "routes/pages/client-light-gallary.tsx"),
      route("/dashboard/rtk-query", "routes/pages/rtk-query.tsx"),
  ]),
] satisfies RouteConfig;
