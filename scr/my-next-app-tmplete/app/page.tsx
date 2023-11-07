"use client";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/app/theme";

import Button from "@mui/material/Button";

// import { BasicButton } from "../components/parts/BasicElement";

export default function Home() {
  const cache = createCache({ key: "my-prefix-key" });
  return (
    <div className="min-h-screen items-center p-24">
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Button variant="contained">ぼたん</Button>
        </ThemeProvider>
      </CacheProvider>
    </div>
  );
}
