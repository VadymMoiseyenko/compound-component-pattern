import { Box, IconButton, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Breadcrumbs } from "../../atoms/Breadcrumbs";
import { Close } from "@mui/icons-material";
import { Button } from "../../atoms/Button";
import { Status } from "../../atoms/Status";
import { Subtle } from "../../atoms/Subtle";
import { PageHeaderSubtitle } from "../../moleculs/PageHeader.v4/components/PageHeaderSubtitle";
// import { PageHeaderTitle } from "../../moleculs/PageHeader.v4/components/PageHeaderTitle";
import { PageHeaderSubtitleItem } from "../../moleculs/PageHeader.v4/components/PageHeaderSubtitleItem";
import { PageHeaderSubtitleLinkItem } from "../../moleculs/PageHeader.v4/components/PageHeaderSubtitleLinkItem";
import { PageHeader } from "../../moleculs/PageHeader.v4/PageHeader";

export const ChapterFour = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  });

  return (
    <Box py={4}>
      <PageHeader
        isLoading={isLoading}
        breadcrumbs={
          <Breadcrumbs
            path={[{ label: "Home", link: "/" }, { label: "Demo Page" }]}
          />
        }
        title={
          <PageHeader.Title
            action={
              <IconButton onClick={() => {}} size="small" sx={{ m: 0, p: 0 }}>
                <Close />
              </IconButton>
            }
            info={<Status text="Result" />}
            text="Text"
            extraAction={<Subtle />}
          />
        }
        subTitle={
          <PageHeaderSubtitle
            leftSide={
              <PageHeaderSubtitleItem
                subtitleText="subTitle"
                hightlightedText="whiteText"
                hoverText="Request #123"
              />
            }
            rightSide={
              <PageHeaderSubtitleLinkItem
                linkText="Request #123"
                to="link/to/somewhere"
                textBeforeLink="Request:"
              />
            }
            extraInfo={<Status text="Booked" color="error" />}
          />
        }
        actionBar={
          <Stack gap={1} flexDirection="row">
            <Button text="someText" />
            <Button text="someText" variant="text" />
          </Stack>
        }
      />
    </Box>
  );
};
