import { ServerContent } from "~/components/server-content";
import type { Route } from "./+types/server-suspense";
import { Await } from "react-router";
import { sleep } from "~/sleep";
import React from "react";
import { ReactUse } from "~/components/react-use";

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
      <React.Suspense fallback={<div>LoadingAwait...</div>}>
        <Await
          resolve={promiseAwait}
          errorElement={<div>Could not load reviews 😬</div>}
        >
          {(resolvedPromiseAwait) => (
            <ServerContent>{resolvedPromiseAwait}</ServerContent>
          )}
        </Await>
      </React.Suspense>

      <React.Suspense fallback={<div>LoadingReact...</div>}>
        <ServerContent>
          <ReactUse promise={promiseReact} />
        </ServerContent>
      </React.Suspense>
    </div>
  );
}
