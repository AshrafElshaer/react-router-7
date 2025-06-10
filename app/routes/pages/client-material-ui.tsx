import { ClientContent } from "~/components/client-content";

import { Typography, Button } from "@material-ui/core";
import { useIsHydrated } from "~/use-is-hydrated";

export default function ClientMaterialUI() {
  const { isHydrated } = useIsHydrated();
  if (!isHydrated) {
    return <p>Loading...</p>;
  }
  return (
    <ClientContent>
      <Typography>Hello, world!</Typography>
      <Button>Click me</Button>
    </ClientContent>
  );
}
