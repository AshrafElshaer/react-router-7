import { useState } from "react";
import { Button } from "@mui/material";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={() => setCount((count) => count + 1)}>Increment</Button>
      <Button onClick={() => setCount((count) => count - 1)}>Decrement</Button>
    </div>
  );
}
