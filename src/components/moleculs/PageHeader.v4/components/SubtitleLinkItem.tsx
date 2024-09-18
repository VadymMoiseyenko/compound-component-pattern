import { Link, Stack, Typography } from "@mui/material";
import { SkeletonWrap } from "../../../atoms/SkeletonWrap";
import { Link as RouterLink } from "react-router-dom";
import { usePageHeaderContext } from "../PageHeader";

export interface IProps {
  linkText: string;
  textBeforeLink: string;
  to: string;
}

export const SubtitleLinkItem = ({ linkText, textBeforeLink, to }: IProps) => {
  const { isLoading } = usePageHeaderContext();
  return (
    <Stack direction="row" gap={1}>
      <Typography
        fontSize="16px"
        lineHeight="23px"
        fontWeight="400"
        color="rgba(255, 255, 255, 0.7)"
      >
        {textBeforeLink}
      </Typography>
      <SkeletonWrap isLoading={isLoading}>
        <Link component={RouterLink} to={to} underline="hover">
          <Typography fontSize="16px" lineHeight="23px" fontWeight="400">
            {linkText}
          </Typography>
        </Link>
      </SkeletonWrap>
    </Stack>
  );
};
