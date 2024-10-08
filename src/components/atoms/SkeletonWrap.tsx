import { Skeleton } from "@mui/material";
import { ReactNode } from "react";

export const SkeletonWrap = ({
  children,
  isLoading,
}: {
  isLoading: boolean;
  children: ReactNode;
}) =>
  isLoading ? (
    <Skeleton
      sx={{
        bgcolor: "rgba(255, 255, 255, 0.1)",
      }}
    >
      {children}
    </Skeleton>
  ) : (
    children
  );
