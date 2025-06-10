import { NavLink, Outlet } from "react-router";
import { Button, CircularProgress, Divider, Typography } from "@mui/material";
import { ThemeSelector } from "~/theme";

const ROUTES = [
  {
    label: "Server Only",
    path: "/dashboard",
  },
  {
    label: "Client Only",
    path: "/dashboard/client",
  },
  {
    label: "Server ( document )",
    path: "/dashboard/server-document",
  },
  {
    label: "Client ( document )",
    path: "/dashboard/client-document",
    id: "client-document-link",
  },
  {
    label: "Server ( window )",
    path: "/dashboard/server-window",
  },
  {
    label: "Client ( window )",
    path: "/dashboard/client-window",
  },
  {
    label: "Server & Client",
    path: "/dashboard/server-client",
  },
  {
    label: "Server ( @material-ui / V4 )",
    path: "/dashboard/server-material-ui",
  },
  {
    label: "Client ( @material-ui / V4 )",
    path: "/dashboard/client-material-ui",
  },
  {
    label: "Server ( @mui/material / V7 )",
    path: "/dashboard/server-mui-material",
  },
  {
    label: "Client ( @mui/material / V7 )",
    path: "/dashboard/client-mui-material",
  },
  {
    label: "Server Breadcrumbs non mui",
    path: "/dashboard/server-breadcrumbs-non-mui",
  },
  {
    label: "Client Breadcrumbs non mui",
    path: "/dashboard/client-breadcrumbs-non-mui",
  },
  {
    label: "Server Breadcrumbs mui",
    path: "/dashboard/server-breadcrumbs-mui",
  },
  {
    label: "Client Breadcrumbs mui",
    path: "/dashboard/client-breadcrumbs-mui",
  },
  {
    label: "Server & Suspense",
    path: "/dashboard/server-suspense",
  },
];

export const loader = async () => {
  return;
};

export default function DashboardLayout() {
  return (
    <div className="flex gap-4   min-h-screen">
      <div className="w-72 p-4">
        <Typography variant="h6" sx={{ mb: 2 }}>
          Layout Component
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          This layout must be server-side rendered to allow its child pages to
          also render on the server.
        </Typography>
        <ThemeSelector />
        <nav className=" flex flex-col gap-2">
          {ROUTES.map((route) => (
            <NavLink to={route.path} key={route.path} end>
              {({ isActive, isPending }) => (
                <Button
                  variant={isActive ? "contained" : "text"}
                  color={isActive ? "primary" : "inherit"}
                  className="w-full !justify-start gap-2"
                  size="small"
                  id={route.id ?? undefined}
                  disabled={isPending}
                >
                  {isPending && <CircularProgress size={16} />}
                  <span>{route.label}</span>
                </Button>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
      <Divider orientation="vertical" flexItem />
      <div className="flex-1 p-4 ">
        <Outlet />
      </div>
    </div>
  );
}
