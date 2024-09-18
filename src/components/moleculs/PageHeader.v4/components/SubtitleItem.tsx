import { Box, Stack, Typography } from "@mui/material";
import { SkeletonWrap } from "../../../atoms/SkeletonWrap";
import { HoverPopover } from "../../../atoms/HoverPopover";
import { usePageHeaderContext } from "../PageHeader";

export interface IProps {
  subtitleText: string;
  hightlightedText: string;
  hoverText: string;
}

export const SubtitleItem = ({
  subtitleText,
  hightlightedText,
  hoverText,
}: IProps) => {
  const { isLoading } = usePageHeaderContext();
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <Typography
        fontSize="16px"
        lineHeight="23px"
        fontWeight="400"
        color="rgba(255, 255, 255, 0.7)"
      >
        {subtitleText}
      </Typography>
      <HoverPopover
        info={
          <Box sx={{ p: 2 }}>
            <Typography
              fontSize="16px"
              lineHeight="23px"
              fontWeight="400"
              color="rgba(255, 255, 255, 0.7)"
            >
              {hoverText}
            </Typography>
          </Box>
        }
      >
        <SkeletonWrap isLoading={isLoading}>
          <Typography
            fontSize="16px"
            lineHeight="23px"
            fontWeight="400"
            color="#FFFFFF"
          >
            {hightlightedText}
          </Typography>
        </SkeletonWrap>
      </HoverPopover>
    </Stack>
  );
};
