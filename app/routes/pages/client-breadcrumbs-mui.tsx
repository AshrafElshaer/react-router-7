import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router";
import { ClientContent } from "~/components/client-content";
import { useIsHydrated } from "~/use-is-hydrated";

export default function ClientBreadcrumbsMui() {
  const { isHydrated } = useIsHydrated();
  if (!isHydrated) {
    return <p>Loading...</p>;
  }
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
