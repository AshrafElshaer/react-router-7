import { Card, CardContent, Typography, Divider } from "@mui/material";

export function ClientContent({ children }: { children: React.ReactNode }) {
  if (typeof window === "undefined") {
    return null;
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
