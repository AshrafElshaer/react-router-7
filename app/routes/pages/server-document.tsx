import { Stack, Typography } from "@mui/material";

export const loader = async () => {
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
        ReferenceError: document is not defined at ServerDocument
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
