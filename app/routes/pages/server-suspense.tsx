import { ServerContent } from "~/components/server-content";
import type { Route } from "./+types/server-suspense";
import { Await } from "react-router";
import { sleep } from "~/sleep";
import React from "react";
import { ReactUse } from "~/components/react-use";
import { ClientContent } from "~/components/client-content";
import Counter from "~/components/counter";
import { Skeleton } from "@mui/material";

export const loader = async () => {
  const promiseAwait = sleep(2000, "message form Await ");
  const promiseReact = sleep(4000, "message form React");
  return {
    promiseAwait,
    promiseReact,
  };
};

export default function ServerSuspense({ loaderData }: Route.ComponentProps) {
  const { promiseAwait, promiseReact } = loaderData;
  return (
    <div className="flex flex-col gap-4">
      <React.Suspense
        fallback={
          <div className="flex flex-col gap-1">
            LoadingAwait...
            <Skeleton variant="text" width="100%" height={100} />
          </div>
        }
      >
        <Await
          resolve={promiseAwait}
          errorElement={<div>Could not load message 😬</div>}
        >
          {(resolvedPromiseAwait) => (
            <ServerContent>{resolvedPromiseAwait}</ServerContent>
          )}
        </Await>
      </React.Suspense>

      <React.Suspense
        fallback={
          <div className="flex flex-col gap-1">
            LoadingReact...
            <Skeleton variant="text" width="100%" height={100} />
          </div>
        }
      >
        <ServerContent>
          <ReactUse promise={promiseReact} />
        </ServerContent>
      </React.Suspense>

      <ClientContent>
        <Counter />
      </ClientContent>
    </div>
  );
}
