import { ServerContent } from "~/components/server-content";
import type { Route } from "./+types/server-only";
import { Stack } from "@mui/material";
import { sleep } from "~/sleep";

export const loader = async () => {
  const message: string = await sleep(
    1000,
    "This is a message from the server"
  );
  return {
    message,
  };
};

export default function ServerPage({ loaderData }: Route.ComponentProps) {
  const { message } = loaderData;

  return (
    <ServerContent>
      <Stack spacing={8}>{message}</Stack>
    </ServerContent>
  );
}
