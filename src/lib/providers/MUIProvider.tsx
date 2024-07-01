"use client";

import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { theme } from "../theme/theme";

const MUIProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MUIProvider;
