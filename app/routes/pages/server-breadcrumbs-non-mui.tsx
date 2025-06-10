import { ServerContent } from "~/components/server-content";
import type { Route } from "./+types/server-breadcrumbs-non-mui";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";

export const loader = async () => {
  return {
    message: "Hello, world!",
  };
};

export default function ServerBreadcrumbsNonMui({
  loaderData,
}: Route.ComponentProps) {
  return (
    <ServerContent>
      <pre className="bg-neutral-800 text-white p-4 rounded-md">
        {JSON.stringify(loaderData, null, 2)}
      </pre>
      <BreadcrumbsItem to="/">Home</BreadcrumbsItem>
      <BreadcrumbsItem to="/dashboard/server-breadcrumbs-non-mui">
        Dashboard
      </BreadcrumbsItem>
    </ServerContent>
  );
}
