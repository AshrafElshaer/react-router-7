import { Stack, Typography } from "@mui/material";
import { ClientContent } from "~/components/client-content";
import { useIsHydrated } from "~/use-is-hydrated";

export default function ClientDocument() {
  const { isHydrated } = useIsHydrated();
  if (!isHydrated) {
    return <p>Loading...</p>;
  }
  const element = document.querySelector("#client-document-link");

  return (
    <ClientContent>
      <Stack gap={2}>
        <Typography>
          Using document object to select element on the client side the content
          below belongs to an element with the id client-document-link
        </Typography>
        {element && <Typography>{element.textContent}</Typography>}
      </Stack>
    </ClientContent>
  );
}
