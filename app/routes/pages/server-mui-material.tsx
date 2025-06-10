import { ServerContent } from "~/components/server-content";
import type { Route } from "./+types/server-mui-material";
import { Input, Button, Typography, TextField } from "@mui/material";
import { sleep } from "~/sleep";

export const loader = async () => {
  await sleep(1000, "Loading data...");
  return {
    message: "Hello, world!",
  };
};

export default function ServerMuiMaterial({
  loaderData,
}: Route.ComponentProps) {
  return (
    <ServerContent>
      <pre className="bg-neutral-800 text-white p-4 rounded-md">
        {JSON.stringify(loaderData, null, 2)}
      </pre>
      <Typography>Hello, world!</Typography>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button>Click me</Button>
    </ServerContent>
  );
}
