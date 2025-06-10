import { ClientContent } from "~/components/client-content";
import { sleep } from "~/sleep";
import type { Route } from "./+types/client-suspense";
import { useIsHydrated } from "~/use-is-hydrated";
import { Skeleton, Typography, Button } from "@mui/material";
import React from "react";
import { Await } from "react-router";
import { ReactUse } from "~/components/react-use";
import Counter from "~/components/counter";

export const clientLoader = async () => {
  const promiseAwait = sleep(2000, "message form Await ");
  const promiseReact = sleep(4000, "message form React");
  return {
    promiseAwait,
    promiseReact,
  };
};

export default function ClientSuspense({ loaderData }: Route.ComponentProps) {
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
            <ClientContent>{resolvedPromiseAwait}</ClientContent>
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
        <ClientContent>
          <ReactUse promise={promiseReact} />
        </ClientContent>
      </React.Suspense>

      <ClientContent>
        <Counter />
      </ClientContent>
    </div>
  );
}
