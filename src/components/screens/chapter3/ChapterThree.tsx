import { Box, IconButton, Stack } from "@mui/material";
import { PageHeader } from "../../moleculs/PageHeader.v3/PageHeader";
import { Breadcrumbs } from "../../atoms/Breadcrumbs";
import { PageHeaderTitle } from "../../moleculs/PageHeader.v3/components/PageHeaderTitle";
import { Close } from "@mui/icons-material";
import { Status } from "../../atoms/Status";
import { Subtle } from "../../atoms/Subtle";
import { PageHeaderSubtitle } from "../../moleculs/PageHeader.v3/components/PageHeaderSubtitle";
import { PageHeaderSubtitleItem } from "../../moleculs/PageHeader.v3/components/PageHeaderSubtitleItem";
import { PageHeaderSubtitleLinkItem } from "../../moleculs/PageHeader.v3/components/PageHeaderSubtitleLinkItem";
import { Button } from "../../atoms/Button";

export const ChapterThree = () => {
  return (
    <Box py={4}>
      <PageHeader
        breadcrumbs={
          <Breadcrumbs
            path={[{ label: "Home", link: "/" }, { label: "Demo Page" }]}
          />
        }
        title={
          <PageHeaderTitle
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
