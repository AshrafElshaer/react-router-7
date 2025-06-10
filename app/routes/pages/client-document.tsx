import { Stack, Typography } from "@mui/material";
import { ClientContent } from "~/components/client-content";

export const clientLoader = async () => {
  return 
};

export default function ClientDocument() {
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
