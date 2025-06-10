import { ClientContent } from "~/components/client-content";

import type { Route } from "./+types/client-mui-material";
import { Typography, Button, TextField } from "@mui/material";

export const clientLoader = async () => {
  return;
};
export default function ClientMuiMaterial({
  loaderData,
}: Route.ComponentProps) {
  return (
    <ClientContent>
      <Typography>Hello, world!</Typography>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button>Click me</Button>
    </ClientContent>
  );
}
