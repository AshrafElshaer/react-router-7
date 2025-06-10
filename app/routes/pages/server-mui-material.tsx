import { ServerContent } from "~/components/server-content";
import type { Route } from "./+types/server-mui-material";
import { Input ,Button ,Typography} from "@mui/material";

export const loader = async () => {
  return {
    message: "Hello, world!",
  };
};

export default function ServerMuiMaterial({loaderData}: Route.ComponentProps) {
  return <ServerContent><pre className="bg-neutral-800 text-white p-4 rounded-md">{JSON.stringify(loaderData, null, 2)}</pre>
  <Typography>Hello, world!</Typography>
  <Button>Click me</Button>
  </ServerContent>;
}