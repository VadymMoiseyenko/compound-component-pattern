import { Box, Typography } from "@mui/material";

export type OldPageHeaderSecondProps = {
  title: string;
  subtitle: string;
};

export const OldPageHeaderSecond = ({
  title,
  subtitle,
}: OldPageHeaderSecondProps) => (
  <Box sx={{ mb: 3 }}>
    <Typography variant="h4">{title}</Typography>
    <Typography variant="subtitle1">{subtitle}</Typography>
  </Box>
);
