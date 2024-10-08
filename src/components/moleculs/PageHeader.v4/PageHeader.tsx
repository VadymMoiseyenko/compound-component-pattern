import { Box, Stack } from "@mui/material";
import { createContext, ReactNode, useContext } from "react";
import { SkeletonWrap } from "../../atoms/SkeletonWrap";
import { Title } from "./components/Title";
import { Subtitle } from "./components/Subtitle";
import { SubtitleLinkItem } from "./components/SubtitleLinkItem";
import { SubtitleItem } from "./components/SubtitleItem";

export type NewPageHeaderProps = {
  actionBar?: ReactNode;
  title?: ReactNode;
  subTitle?: ReactNode;
  subtle?: ReactNode;
  breadcrumbs?: ReactNode;
  isLoading?: boolean;
};

export const PageHeaderContext = createContext({ isLoading: false });

export const usePageHeaderContext = () => useContext(PageHeaderContext);

export const PageHeader = ({
  actionBar,
  title,
  subTitle,
  breadcrumbs,
  isLoading = false,
}: NewPageHeaderProps) => {
  return (
    <PageHeaderContext.Provider value={{ isLoading }}>
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
              <SkeletonWrap isLoading={isLoading}>{actionBar}</SkeletonWrap>
            </Box>
          )}
        </Stack>
      </Box>
    </PageHeaderContext.Provider>
  );
};

PageHeader.Title = Title;
PageHeader.SubTitle = Subtitle;
PageHeader.SubtitleLinkItem = SubtitleLinkItem;
PageHeader.SubtitleItem = SubtitleItem;
