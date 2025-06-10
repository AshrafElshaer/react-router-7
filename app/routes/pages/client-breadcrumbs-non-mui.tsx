import { Typography } from "@mui/material";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { ClientContent } from "~/components/client-content";
import { useIsHydrated } from "~/use-is-hydrated";

export default function ClientBreadcrumbsNonMui() {
  const { isHydrated } = useIsHydrated();
  if (!isHydrated) {
    return <p>Loading...</p>;
  }
  return (
    <ClientContent>
      <BreadcrumbsItem to="/">Home</BreadcrumbsItem>
      <BreadcrumbsItem to="/dashboard/client-breadcrumbs-non-mui">
        Dashboard
      </BreadcrumbsItem>
      {/* <Breadcrumbs separator="›" aria-label="breadcrumb">
    </Breadcrumbs>  */}
      <Typography>Hello, world!</Typography>
    </ClientContent>
  );
}
