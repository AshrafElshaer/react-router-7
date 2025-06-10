import { Typography } from "@mui/material";
import { Breadcrumbs ,BreadcrumbsItem} from "react-breadcrumbs-dynamic";
import { ClientContent } from "~/components/client-content";

export const clientLoader = async () => {
  return {
    message: "Hello, world!",
  };
};

export default function ClientBreadcrumbsNonMui() {
  return <ClientContent>
      <BreadcrumbsItem to="/">Home</BreadcrumbsItem>
      <BreadcrumbsItem to="/dashboard/client-breadcrumbs-non-mui">Dashboard</BreadcrumbsItem>
    {/* <Breadcrumbs separator="›" aria-label="breadcrumb">
    </Breadcrumbs>  */}
    <Typography>Hello, world!</Typography>
  </ClientContent>;
}