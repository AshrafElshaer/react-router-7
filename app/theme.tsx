import {
  ThemeProvider,
  createTheme,
  useColorScheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
  FormLabel,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
} from "@mui/material";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

export default function Theme({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export function ThemeSelector() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <Box
      sx={{
        mb: 2,
      }}
    >
      <FormControl fullWidth>
        <FormLabel id="theme-select-label">Theme</FormLabel>
        <Box sx={{ mt: 1 }}>
          <RadioGroup
            aria-labelledby="theme-select-label"
            name="theme-toggle"
            value={mode}
            onChange={(event) =>
              setMode(event.target.value as "system" | "light" | "dark")
            }
            sx={{ display: "none" }} // Hide the radio group, only use Select below
          />
          <Select
            labelId="theme-select-label"
            id="theme-select"
            value={mode}
            onChange={(event) =>
              setMode(event.target.value as "system" | "light" | "dark")
            }
            fullWidth
            size="small"
          >
            <MenuItem value="system">System</MenuItem>
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
          </Select>
        </Box>
      </FormControl>
    </Box>
  );
}
