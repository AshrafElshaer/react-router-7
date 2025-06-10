import { ServerContent } from "~/components/server-content";
import type { Route } from "./+types/server-material-ui";
import { Input ,Button ,Typography} from "@material-ui/core";

export const loader = async () => {
  return {
    message: "Hello, world!",
  };
};

export default function ServerMaterialUI({loaderData}: Route.ComponentProps) {
  return <ServerContent><pre className="bg-neutral-800 text-white p-4 rounded-md">{JSON.stringify(loaderData, null, 2)}</pre>
  <Typography>Hello, world!</Typography>
  <Button>Click me</Button>
  </ServerContent>;
}