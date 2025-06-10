import { ClientContent } from "~/components/client-content";
import { ServerContent } from "~/components/server-content";
import Counter from "~/components/counter";
import type { Route } from "./+types/server-client";
import { sleep } from "~/sleep";

export const loader = async () => {
  await sleep(1000, "Loading data...");
  return {
    message: "Hello, world!",
  };
};

export const HydrateFallback = () => {
  return (
    <div className="flex flex-col gap-4">
      <pre className="bg-neutral-800 text-white p-4 rounded-md">Loading...</pre>
    </div>
  );
};

export default function ServerClient({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex flex-col gap-4">
      <ServerContent>
        <pre className="bg-neutral-800 text-white p-4 rounded-md">
          {JSON.stringify(loaderData, null, 2)}
        </pre>
      </ServerContent>
      <ClientContent>
        <Counter />
      </ClientContent>
    </div>
  );
}
