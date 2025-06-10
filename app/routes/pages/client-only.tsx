import type { Route } from "./+types/client-only";
import { ClientContent } from "~/components/client-content";

export const clientLoader = async () => {
  return {
    message: "This is a message from the client",
  };
};

export default function ClientOnly({ loaderData }: Route.ComponentProps) {
  const { message } = loaderData;
  return <ClientContent>{message}</ClientContent>;
}
