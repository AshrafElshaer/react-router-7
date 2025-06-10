import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router";
import { ClientContent } from "~/components/client-content";

export const clientLoader = async () => {
  return {
    message: "Hello, world!",
  };
};

export default function ClientBreadcrumbsMui() {
  return (
    <ClientContent>
      <Typography sx={{ color: "text.primary" }}>Breadcrumbs</Typography>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/">MUI</Link>
        <Link to="/material-ui/getting-started/installation/">Core</Link>
      </Breadcrumbs>
    </ClientContent>
  );
}
