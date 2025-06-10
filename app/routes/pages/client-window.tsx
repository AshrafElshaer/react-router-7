import { ClientContent } from "~/components/client-content";
import { sleep } from "~/sleep";
import type { Route } from "./+types/client-window";
import { Stack, Typography } from "@mui/material";

export const clientLoader = async () => {
  return {
    message: "This is a message from the client",
  };
};
export function HydrateFallback() {
  return (
    <div className="flex flex-col gap-4">
      <pre className="bg-neutral-800 text-white p-4 rounded-md">Loading...</pre>
    </div>
  );
}
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
