import { Box, Stack, Typography } from "@mui/material";
import { HoverPopover } from "../../../atoms/HoverPopover";

interface IProps {
  subtitleText: string;
  hightlightedText: string;
  hoverText: string;
}
export const PageHeaderSubtitleItem = ({
  subtitleText,
  hightlightedText,
  hoverText,
}: IProps) => (
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
      <Typography
        fontSize="16px"
        lineHeight="23px"
        fontWeight="400"
        color="#FFFFFF"
      >
        {hightlightedText}
      </Typography>
    </HoverPopover>
  </Stack>
);
