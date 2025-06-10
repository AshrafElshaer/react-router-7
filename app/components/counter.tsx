import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/counter-slice";
import type { RootState } from "~/redux/store";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
    </div>
  );
}
