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
    <Typography variant="subtitle1">{subtitleText}</Typography>
    <HoverPopover
      info={
        <Box sx={{ p: 2 }}>
          <Typography variant="subtitle1">{hoverText}</Typography>
        </Box>
      }
    >
      <Typography variant="subtitle2">{hightlightedText}</Typography>
    </HoverPopover>
  </Stack>
);
