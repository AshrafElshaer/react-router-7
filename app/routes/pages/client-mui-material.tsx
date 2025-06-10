import { ClientContent } from "~/components/client-content";
import { sleep } from "~/sleep";
import type { Route } from "./+types/client-mui-material";
import { Typography ,Button } from "@mui/material";

export const clientLoader = async () => {

  return 
};
export default function ClientMuiMaterial({loaderData}: Route.ComponentProps) {
  return <ClientContent>
    <Typography>Hello, world!</Typography>
    <Button>Click me</Button>
  </ClientContent>;
}