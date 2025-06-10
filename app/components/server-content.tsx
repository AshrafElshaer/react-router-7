import { Card, CardContent, Typography, Divider } from "@mui/material";
import type { CardContentProps } from "@mui/material/CardContent";

export function ServerContent({
  children,
  ...props
}: {
  children: React.ReactNode;
} & CardContentProps) {
  return (
    <Card>
      <Typography variant="body1" sx={{ p: 2, paddingBottom: 0 }}>
        This content below is rendered on the server
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ p: 2 }}>
        View page source and search for any content below
      </Typography>
      <Divider />
      <CardContent {...props}>{children}</CardContent>
    </Card>
  );
}
