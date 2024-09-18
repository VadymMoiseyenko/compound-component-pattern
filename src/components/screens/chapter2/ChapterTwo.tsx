import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { PageHeader } from "../../moleculs/PageHeader.v3/PageHeader";
import { ColorderBox } from "../../atoms/ColordedBox";
import { Button } from "../../atoms/Button";
import { Breadcrumbs } from "../../atoms/Breadcrumbs";
import { Circle, Close } from "@mui/icons-material";
import { Status } from "../../atoms/Status";
import { Subtle } from "../../atoms/Subtle";
import { HoverPopover } from "../../atoms/HoverPopover";

import { Link as RouterLink } from "react-router-dom";
import { NewPageHeader } from "../../moleculs/PageHeader.v2/PageHeader";

export const ChapterTwo = () => (
  <Box>
    <Box py={4}>
      <NewPageHeader
        breadcrumbs={<ColorderBox color="red">breadcrumbs</ColorderBox>}
        title={<ColorderBox color="green">title</ColorderBox>}
        subTitle={<ColorderBox color="blue">subTitle</ColorderBox>}
        actionBar={<ColorderBox color="purple">actionBar</ColorderBox>}
      />
    </Box>
    {/* //--------------------------------- */}
    <Box py={4}>
      <PageHeader
        breadcrumbs={<ColorderBox color="red">breadcrumbs</ColorderBox>}
        title={<ColorderBox color="green">title</ColorderBox>}
        subTitle={<ColorderBox color="blue">subTitle</ColorderBox>}
        actionBar={<ColorderBox color="purple">actionBar</ColorderBox>}
      />
    </Box>
    {/* //--------------Action-Bar-------------------- */}
    <Box py={4}>
      <PageHeader
        breadcrumbs={<ColorderBox color="red">breadcrumbs</ColorderBox>}
        title={<ColorderBox color="green">title</ColorderBox>}
        subTitle={<ColorderBox color="blue">subTitle</ColorderBox>}
        actionBar={
          <Stack gap={1} flexDirection="row">
            <Button text="someText" />
          </Stack>
        }
      />
    </Box>
    {/* //--------------Add-Breadcrumbs------------------- */}
    <Box py={4}>
      <PageHeader
        breadcrumbs={
          <Breadcrumbs
            path={[{ label: "Home", link: "/" }, { label: "Demo Page" }]}
          />
        }
        title={<ColorderBox color="green">title</ColorderBox>}
        subTitle={<ColorderBox color="blue">subTitle</ColorderBox>}
        subtle={<ColorderBox color="yellow">subtle</ColorderBox>}
        actionBar={
          <Stack gap={1} flexDirection="row">
            <Button text="someText" />
          </Stack>
        }
      />
    </Box>
    {/* //----------------Add-Title----------------- */}
    <Box py={4}>
      <PageHeader
        breadcrumbs={
          <Breadcrumbs
            path={[{ label: "Home", link: "/" }, { label: "Demo Page" }]}
          />
        }
        title={
          <Stack gap={2} flexDirection="row" alignItems="center">
            <IconButton onClick={() => {}} size="small" sx={{ m: 0, p: 0 }}>
              <Close />
            </IconButton>
            <Typography variant="h4">Text</Typography>
            <Status text="Result" />
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                width: "1px",
                bgcolor: "rgba(255, 255, 255, 0.7)",
              }}
            />
            <Subtle />
          </Stack>
        }
        subTitle={<ColorderBox color="blue">subTitle</ColorderBox>}
        actionBar={
          <Stack gap={1} flexDirection="row">
            <Button text="someText" />
            <Button text="someText" variant="text" />
          </Stack>
        }
      />
    </Box>
    {/* //-----------------Add-Subtitle----------------- */}
    <Box py={4}>
      <PageHeader
        breadcrumbs={
          <Breadcrumbs
            path={[{ label: "Home", link: "/" }, { label: "Demo Page" }]}
          />
        }
        title={
          <Stack gap={2} flexDirection="row" alignItems="center">
            <IconButton onClick={() => {}} size="small" sx={{ m: 0, p: 0 }}>
              <Close />
            </IconButton>
            <Typography variant="h4">Text</Typography>
            <Status text="Result" />
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                width: "1px",
                bgcolor: "rgba(255, 255, 255, 0.7)",
              }}
            />
            <Subtle />
          </Stack>
        }
        subTitle={
          <Stack direction="row" alignItems="center" gap={2} sx={{ mt: 1 }}>
            <Stack direction="row" alignItems="center" gap={1}>
              <Typography variant="subtitle1">subTitle</Typography>
              <HoverPopover
                info={
                  <Box sx={{ p: 2 }}>
                    <Typography variant="subtitle2">Request #123</Typography>
                  </Box>
                }
              >
                <Typography variant="subtitle2">"whiteText"</Typography>
              </HoverPopover>
            </Stack>

            <Circle
              sx={{
                fontSize: 8,
              }}
            />
            <Stack direction="row" gap={1}>
              <Typography variant="subtitle1">Request:</Typography>
              <Link
                component={RouterLink}
                to="link/to/somewhere"
                underline="hover"
              >
                <Typography variant="subtitle1" color="rgb(25, 118, 210)">
                  Request #123
                </Typography>
              </Link>
            </Stack>
            <Status text="Booked" color="error" />
          </Stack>
        }
        actionBar={
          <Stack gap={1} flexDirection="row">
            <Button text="someText" />
            <Button text="someText" variant="text" />
          </Stack>
        }
      />
    </Box>
  </Box>
);
