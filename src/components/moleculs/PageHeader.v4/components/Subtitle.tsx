import { Stack } from "@mui/material";
import { Circle } from "@mui/icons-material";
import { SkeletonWrap } from "../../../atoms/SkeletonWrap";
import { usePageHeaderContext } from "../PageHeader";

export interface IProps {
  leftSide: React.ReactNode;
  rightSide?: React.ReactNode;
  extraInfo?: React.ReactNode;
}

export const Subtitle = ({ leftSide, rightSide, extraInfo }: IProps) => {
  const { isLoading } = usePageHeaderContext();
  return (
    <Stack direction="row" alignItems="center" gap={2} sx={{ mt: 1 }}>
      {leftSide}
      {rightSide && (
        <>
          <Circle
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: 8,
            }}
          />
          {rightSide}
        </>
      )}
      <SkeletonWrap isLoading={isLoading}>{extraInfo}</SkeletonWrap>
    </Stack>
  );
};
