
import { Card, CardContent, Typography, Divider } from "@mui/material";
import { useEffect, useState } from "react";
export function clientLoader() {
  return 
}

export function ClientContent({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  if (!isHydrated) {
    return <p>Loading client content after hydration</p>;
  }
  
  return (
    <Card>
      <Typography variant="body1" sx={{ p: 2 }}>
        This content below is rendered on the client
      </Typography>
      <Divider />
      <CardContent>{children}</CardContent>
    </Card>
  );
}
