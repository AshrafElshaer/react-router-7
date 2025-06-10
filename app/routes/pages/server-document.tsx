import { Stack, Typography } from "@mui/material";
import { sleep } from "~/sleep";

export const loader = async () => {
  await sleep(1000, "Loading data...");
  return {
    message: "Hello, world!",
  };
};

export default function ServerDocument() {
  const element = document.querySelector("#client-document-link");
  return (
    <Stack gap={2}>
      <Typography>
        If you navigate to this page from another page, the server-rendered HTML
        will render the error below. Check the page source to verify.
      </Typography>
      <pre className="bg-neutral-800 text-white p-4 rounded-md">
        Oops! An unexpected error occurred.
      </pre>
      <Typography>
        {" "}
        Now it works as expected on the client, because HTML errors cause a
        switch to client-side rendering.
      </Typography>
      <Typography>
        However, if you refresh the page or land here directly, you'll see the
        server-rendered HTML.
      </Typography>
      <Typography>
        The content below belongs to an element with the id client-document-link
      </Typography>
      {element && <Typography>{element.textContent}</Typography>}
    </Stack>
  );
}
