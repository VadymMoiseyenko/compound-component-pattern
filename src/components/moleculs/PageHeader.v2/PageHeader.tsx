import { Box } from "@mui/material";
import { ReactNode } from "react";

type PageHeaderProps = {
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
}: PageHeaderProps) => (
  <Box>
    <Box>{title}</Box>
    <Box>{subTitle}</Box>
    <Box>{subtle}</Box>
    <Box>{breadcrumbs}</Box>
    <Box>{actionBar}</Box>
  </Box>
);
