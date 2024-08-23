import { Box, Link, Stack, Typography } from "@mui/material";
import { HoverPopover } from "../../atoms/HoverPopover";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "../../atoms/Button";

export type OldPageHeaderFifthProps = {
  title: string;
  subtitle?: string;
  showButton?: boolean;
  popoverContent?: React.ReactNode;
  whiteText?: string;
  buttonText?: string;
  linkText?: string;
  link?: string;
  onClick?: () => void;
};

export const OldPageHeaderFifth = ({
  title,
  subtitle,
  showButton,
  popoverContent,
  whiteText,
  linkText,
  link,
  onClick,
  buttonText = "",
}: OldPageHeaderFifthProps) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h4">{title}</Typography>

          <Stack direction="row" gap={1}>
            <Typography variant="subtitle1">{subtitle}</Typography>

            <HoverPopover info={popoverContent}>
              <Typography variant="subtitle2">{whiteText}</Typography>
            </HoverPopover>
            {link && linkText && (
              <Link component={RouterLink} to={link} underline="hover">
                <Typography variant="subtitle2" color="rgb(25, 118, 210)">
                  {linkText}
                </Typography>
              </Link>
            )}
          </Stack>
        </Box>
        {showButton && <Button text={buttonText} onClick={onClick} />}
      </Stack>
    </Box>
  );
};
