import { Stack } from "@mui/material";
import { Circle } from "@mui/icons-material";

interface IProps {
  leftSide: React.ReactNode;
  rightSide?: React.ReactNode;
  extraInfo?: React.ReactNode;
}

export const PageHeaderSubtitle = ({
  leftSide,
  rightSide,
  extraInfo,
}: IProps) => (
  <Stack direction="row" alignItems="center" gap={2} sx={{ mt: 1 }}>
    {leftSide}
    {rightSide && (
      <>
        <Circle
          sx={{
            fontSize: 8,
          }}
        />
        {rightSide}
      </>
    )}
    {extraInfo}
  </Stack>
);
