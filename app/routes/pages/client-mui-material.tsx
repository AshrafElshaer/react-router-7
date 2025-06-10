import { ClientContent } from "~/components/client-content";

import { Typography, Button, TextField } from "@mui/material";
import { useIsHydrated } from "~/use-is-hydrated";

export default function ClientMuiMaterial() {
  const { isHydrated } = useIsHydrated();
  if (!isHydrated) {
    return <p>Loading...</p>;
  }
  return (
    <ClientContent>
      <Typography>Hello, world!</Typography>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button>Click me</Button>
    </ClientContent>
  );
}
