import { ClientContent } from "~/components/client-content";
import { sleep } from "~/sleep";
import type { Route } from "./+types/client-material-ui";
import { Typography ,Button } from "@material-ui/core";

export const clientLoader = async () => {
  const message: string = await sleep(1000, "This is a message from the client");
  return {
    message,
  };
};
export default function ClientMaterialUI({loaderData}: Route.ComponentProps) {
  return <ClientContent>
    <Typography>Hello, world!</Typography>
    <Button>Click me</Button>
  </ClientContent>;
}