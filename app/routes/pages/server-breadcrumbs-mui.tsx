import { ServerContent } from "~/components/server-content";
import type { Route } from "./+types/server-breadcrumbs-mui";

import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router";

export const loader = async () => {
  return {
    message: "Hello, world!",
  };
};

export default function ServerBreadcrumbsMui({
  loaderData,
}: Route.ComponentProps) {
  return (
    <ServerContent>
      <pre className="bg-neutral-800 text-white p-4 rounded-md">
        {JSON.stringify(loaderData, null, 2)}
      </pre>
      <Typography sx={{ color: "text.primary" }}>Breadcrumbs</Typography>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/">MUI</Link>
        <Link to="/material-ui/getting-started/installation/">Core</Link>
      </Breadcrumbs>
    </ServerContent>
  );
}
