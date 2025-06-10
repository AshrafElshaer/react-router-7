import { Typography } from "@mui/material";

export const loader = async () => {
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
