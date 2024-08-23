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
    <Typography variant="subtitle1">{textBeforeLink}</Typography>
    <Link component={RouterLink} to={to} underline="hover">
      <Typography variant="subtitle1" color="rgb(25, 118, 210)">
        {linkText}
      </Typography>
    </Link>
  </Stack>
);
