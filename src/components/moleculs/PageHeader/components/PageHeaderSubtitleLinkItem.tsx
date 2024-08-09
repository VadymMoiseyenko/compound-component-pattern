import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface IProps {
  linkText: string;
  textBeforeLink: string;
  to: string;
}

export const PageHeaderSubtitleLinkItem = ({
  linkText,
  textBeforeLink,
  to,
}: IProps) => (
  <Stack direction="row" gap={1}>
    <Typography
      fontSize="16px"
      lineHeight="23px"
      fontWeight="400"
      color="rgba(255, 255, 255, 0.7)"
    >
      {textBeforeLink}
    </Typography>
    <Link component={RouterLink} to={to} underline="hover">
      <Typography fontSize="16px" lineHeight="23px" fontWeight="400">
        {linkText}
      </Typography>
    </Link>
  </Stack>
);
