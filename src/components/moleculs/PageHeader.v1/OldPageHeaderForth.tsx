import { Box, Stack, Typography } from "@mui/material";
import { HoverPopover } from "../../atoms/HoverPopover";
import { Button } from "../../atoms/Button";

export type OldPageHeaderForthProps = {
  title: string;
  subtitle?: string;
  buttonText?: string;
  showButton?: boolean;
  popoverContent?: React.ReactNode;
  whiteText?: string;
  onClick?: () => void;
};

export const OldPageHeaderForth = ({
  title,
  subtitle,
  buttonText = "",
  showButton,
  popoverContent,
  whiteText,
  onClick,
}: OldPageHeaderForthProps) => (
  <Box sx={{ mb: 3 }}>
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Box>
        <Typography variant="h4">{title}</Typography>

        <Stack direction="row" gap={1}>
          <Typography variant="subtitle1">{subtitle}</Typography>

          <HoverPopover info={popoverContent}>
            <Typography variant="subtitle2">{whiteText}</Typography>
          </HoverPopover>
        </Stack>
      </Box>
      {showButton && <Button text={buttonText} onClick={onClick} />}
    </Stack>
  </Box>
);
