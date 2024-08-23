import { Box, Typography } from "@mui/material";

export const OldPageHeaderFirst = ({ title }: { title: string }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h4">{title}</Typography>
    </Box>
  );
};
