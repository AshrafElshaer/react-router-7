import { Typography } from "@mui/material";
import { sleep } from "~/sleep";

export const loader = async () => {
  await sleep(1000, "Loading data...");
  return {
    message: "Hello, world!",
  };
};
export default function ServerWindow() {
  const location = window.location;
  return (
    <div>
      <Typography>
        Same behavior as server-document.tsx but using window object to select
        the location
      </Typography>
      <Typography>{location.href}</Typography>
    </div>
  );
}
