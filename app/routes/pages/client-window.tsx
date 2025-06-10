import { ClientContent } from "~/components/client-content";
import { sleep } from "~/sleep";
import type { Route } from "./+types/client-window";
import { Stack, Typography } from "@mui/material";

export const clientLoader = async () => {
  const message: string = await sleep(
    1000,
    "This is a message from the client"
  );
  return {
    message,
  };
};

export default function ClientWindow({ loaderData }: Route.ComponentProps) {
  const location = window.location;
  return (
    <ClientContent>
      <Stack gap={2}>
        <Typography>
          the content below was fetched from the client side using the window
          object
        </Typography>
        <pre className="bg-neutral-800 text-white p-4 rounded-md">
          {JSON.stringify(loaderData, null, 2)}
        </pre>
        <Typography>
          Window object is available on the client side, but not on the server.
        </Typography>
        <Typography>{location.href}</Typography>
      </Stack>
    </ClientContent>
  );
}
