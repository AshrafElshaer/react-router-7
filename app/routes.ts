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
  ]),
] satisfies RouteConfig;
