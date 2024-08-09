import { Box } from "@mui/material";
import { ReactNode } from "react";

export const ColorderBox = ({
  children,
  color,
}: {
  children: ReactNode;
  color: string;
}) => (
  <Box
    sx={{
      bgcolor: color,
      width: "100%",
      height: "100%",
      p: 2,
    }}
  >
    {children}
  </Box>
);
