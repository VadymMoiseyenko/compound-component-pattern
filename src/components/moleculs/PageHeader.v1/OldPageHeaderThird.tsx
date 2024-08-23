import { Box, Stack, Typography } from "@mui/material";
import { Button } from "../../atoms/Button";

export const OldPageHeaderThird = ({
  title,
  subtitle,
  onClick,
  buttonText,
  showButton,
}: {
  title: string;
  subtitle: string;
  onClick: () => void;
  buttonText: string;
  showButton: boolean;
}) => (
  <Box sx={{ mb: 3 }}>
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Box>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="subtitle1">{subtitle}</Typography>
      </Box>
      {showButton && <Button text={buttonText} onClick={onClick} />}
    </Stack>
  </Box>
);
