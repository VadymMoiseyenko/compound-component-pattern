import { type MouseEvent, type ReactNode, useState } from "react";
import {
  Box,
  Popover,
  type PopoverOrigin,
  type SxProps,
  type Theme,
  Typography,
} from "@mui/material";

export interface IPopoverWrapperProps {
  children: ReactNode;
  info: ReactNode | string;
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;
  disableHover?: boolean;
  disablePopover?: boolean;
  closeOnFocus?: boolean;
  childrenSx?: SxProps<Theme>;
}

export const HoverPopover = ({
  children,
  info,
  anchorOrigin = { vertical: "bottom", horizontal: "center" },
  transformOrigin = { vertical: "top", horizontal: "center" },
  disableHover = false,
  disablePopover = false,
  closeOnFocus = false,
  childrenSx,
}: IPopoverWrapperProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handlePopoverOpen = (event: MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handlePopoverClose = () => setAnchorEl(null);

  const popoverInfo =
    typeof info === "string" ? (
      <Typography sx={{ fontSize: "10px", lineHeight: "14px", p: 1 }}>
        {info}
      </Typography>
    ) : (
      info
    );

  return (
    <>
      <Box
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        {...(closeOnFocus ? { onFocus: handlePopoverClose } : {})}
        sx={{
          "&:hover": !disableHover
            ? { backgroundColor: "rgba(255, 255, 255, 0.12)" }
            : {},
          borderRadius: 1,
          display: "inline-block",
          ...childrenSx,
        }}
      >
        {children}
      </Box>
      {!disablePopover && (
        <Popover
          disableRestoreFocus
          open={!!anchorEl}
          anchorEl={anchorEl}
          sx={{ pointerEvents: "none", px: 1, py: 0.5 }}
          slotProps={{
            paper: {
              elevation: 24,
              sx: { backgroundColor: "rgb(21, 30, 33)" },
            },
          }}
          anchorOrigin={anchorOrigin}
          transformOrigin={transformOrigin}
        >
          {popoverInfo}
        </Popover>
      )}
    </>
  );
};
