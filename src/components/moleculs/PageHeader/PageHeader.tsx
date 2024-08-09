import { Box, Stack } from "@mui/material";
import { ReactNode } from "react";

type NewPageHeaderProps = {
  actionBar?: ReactNode;
  title?: ReactNode;
  subTitle?: ReactNode;
  subtle?: ReactNode;
  breadcrumbs?: ReactNode;
};

export const NewPageHeader = ({
  actionBar,
  title,
  subTitle,
  subtle,
  breadcrumbs,
}: NewPageHeaderProps) => (
  <Box>
    <Box>{title}</Box>
    <Box>{subTitle}</Box>
    <Box>{subtle}</Box>
    <Box>{breadcrumbs}</Box>
    <Box>{actionBar}</Box>
  </Box>
);

export const PageHeader = ({
  actionBar,
  title,
  subTitle,
  // subtle,
  breadcrumbs,
}: NewPageHeaderProps) => (
  <Box>
    <Stack direction="row" justifyContent="space-between">
      <Box width="100%">
        <Box>{breadcrumbs}</Box>
        <Box width="100%">{title}</Box>
        <Box>{subTitle}</Box>
      </Box>
      {actionBar && (
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          {actionBar}
        </Box>
      )}
    </Stack>
  </Box>
);
