import { Link } from "react-router";
import { Button } from "@mui/material";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Link to="/dashboard">
        <Button variant="contained" color="primary">
          Go to Dashboard
        </Button>
      </Link>
    </div>
  );
}
