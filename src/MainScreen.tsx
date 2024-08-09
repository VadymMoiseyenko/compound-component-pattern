import { Circle, Close } from "@mui/icons-material";
import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import {
  NewPageHeader,
  PageHeader,
} from "./components/moleculs/PageHeader/PageHeader";
import { SkeletonWrap } from "./components/atoms/SkeletonWrap";
import { Button } from "./components/atoms/Button";
import { Breadcrumbs } from "./components/atoms/Breadcrumbs";
import { HoverPopover } from "./components/atoms/HoverPopover";
import { ColorderBox } from "./components/atoms/ColordedBox";
import { Status } from "./components/atoms/Status";
import { Subtle } from "./components/atoms/Subtle";
import { useEffect, useState } from "react";
import { PageHeaderTitle } from "./components/moleculs/PageHeader/components/PageHeaderTitle";
import { PageHeaderTitle as PageHeaderTitleWithLoader } from "./components/moleculs/PageHeaderWithLoader/components/PageHeaderTitle";
import { PageHeaderSubtitle } from "./components/moleculs/PageHeader/components/PageHeaderSubtitle";
import { PageHeaderSubtitle as PageHeaderSubtitleWithLoader } from "./components/moleculs/PageHeaderWithLoader/components/PageHeaderSubtitle";
import { PageHeaderSubtitleItem } from "./components/moleculs/PageHeader/components/PageHeaderSubtitleItem";
import { PageHeaderSubtitleItem as PageHeaderSubtitleItemWithLoader } from "./components/moleculs/PageHeaderWithLoader/components/PageHeaderSubtitleItem";
import { PageHeaderSubtitleLinkItem } from "./components/moleculs/PageHeader/components/PageHeaderSubtitleLinkItem";
import { PageHeaderSubtitleLinkItem as PageHeaderSubtitleLinkItemWithLoader } from "./components/moleculs/PageHeaderWithLoader/components/PageHeaderSubtitleLinkItem";
import { PageHeaderWithLoader } from "./components/moleculs/PageHeaderWithLoader/PageHeaderWithLoader";

export type OldPageHeaderLastProps = {
  onAddClick: () => void;
  title: string;
  subTitle: string;
  popoverContent: React.ReactNode;
  whiteText: string;
  isLoading?: boolean;
  isSectionHeader?: boolean;
};

export const OldPageHeaderLast = ({
  onAddClick,
  title,
  subTitle,
  popoverContent,
  whiteText,
  isLoading = false,
  isSectionHeader = false,
}: OldPageHeaderLastProps) => {
  const defaultStyle = isSectionHeader ? { p: 2.5, pb: 0 } : { mb: 3 };

  return (
    <Box sx={{ ...defaultStyle }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box sx={{ minWidth: "200px" }}>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            gap={3}
          >
            <SkeletonWrap isLoading={isLoading}>
              <Stack direction="row" alignItems="center" gap={3}>
                <Typography
                  fontSize="32px"
                  lineHeight="38px"
                  fontWeight={400}
                  color="white"
                >
                  {title}
                </Typography>
              </Stack>
            </SkeletonWrap>
          </Stack>
          <Stack direction="row" alignItems="center" gap={2} sx={{ mt: 1 }}>
            <Stack direction="row" gap={1}>
              <Typography
                fontSize="16px"
                lineHeight="23px"
                fontWeight="400"
                color="rgba(255, 255, 255, 0.7)"
              >
                {subTitle}
              </Typography>

              <HoverPopover info={popoverContent}>
                <Typography
                  fontSize="16px"
                  lineHeight="23px"
                  fontWeight="400"
                  color="#FFFFFF"
                >
                  {whiteText}
                </Typography>
              </HoverPopover>
            </Stack>

            <Circle
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: 8,
              }}
            />
            <Stack direction="row" gap={1}>
              <Typography
                fontSize="16px"
                lineHeight="23px"
                fontWeight="400"
                color="rgba(255, 255, 255, 0.7)"
              >
                Request:
              </Typography>
              <Link
                component={RouterLink}
                to="link/to/somewhere"
                underline="hover"
              >
                <Typography
                  fontSize="16px"
                  lineHeight="23px"
                  fontWeight="400"
                  color="rgba(255, 255, 255, 0.7)"
                >
                  Request #123
                </Typography>
              </Link>
            </Stack>
          </Stack>
        </Box>
        <Stack gap={1} flexDirection="row">
          <Button text="Add" onClick={onAddClick} />
        </Stack>
      </Stack>
    </Box>
  );
};

export const OldPageHeaderFirst = ({ title }: { title: string }) => {
  const defaultStyle = { mb: 3 };

  return (
    <Box sx={{ ...defaultStyle }}>
      <Typography
        fontSize="32px"
        lineHeight="38px"
        fontWeight={400}
        color="white"
      >
        {title}
      </Typography>
    </Box>
  );
};

export type OldPageHeaderSecondProps = {
  title: string;
  subtitle: string;
};

export const OldPageHeaderSecond = ({
  title,
  subtitle,
}: OldPageHeaderSecondProps) => {
  const defaultStyle = { mb: 3 };

  return (
    <Box sx={{ ...defaultStyle }}>
      <Typography
        fontSize="32px"
        lineHeight="38px"
        fontWeight={400}
        color="white"
      >
        {title}
      </Typography>
      <Typography
        fontSize="16px"
        lineHeight="23px"
        fontWeight="400"
        color="rgba(255, 255, 255, 0.7)"
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export const OldPageHeaderThird = ({
  title,
  subtitle,
  onClick,
  buttonText,
  showButton,
}: {
  title: string;
  subtitle: string;
  onClick: () => void;
  buttonText: string;
  showButton: boolean;
}) => {
  const defaultStyle = { mb: 3 };
  return (
    <Box sx={{ ...defaultStyle }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography
            fontSize="32px"
            lineHeight="38px"
            fontWeight={400}
            color="white"
          >
            {title}
          </Typography>
          <Typography
            fontSize="16px"
            lineHeight="23px"
            fontWeight="400"
            color="rgba(255, 255, 255, 0.7)"
          >
            {subtitle}
          </Typography>
        </Box>
        {showButton && (
          <Button
            color="primary"
            variant="contained"
            sx={{ minWidth: "62px" }}
            onClick={onClick}
            text={buttonText}
          />
        )}
      </Stack>
    </Box>
  );
};

export type OldPageHeaderForthProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  showButton: boolean;
  popoverContent: React.ReactNode;
  whiteText: string;
  onClick?: () => void;
};

export const OldPageHeaderForth = ({
  title,
  subtitle,
  buttonText,
  showButton,
  popoverContent,
  whiteText,
  onClick,
}: OldPageHeaderForthProps) => {
  const defaultStyle = { mb: 3 };

  return (
    <Box sx={{ ...defaultStyle }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography
            fontSize="32px"
            lineHeight="38px"
            fontWeight={400}
            color="white"
          >
            {title}
          </Typography>

          <Stack direction="row" gap={1}>
            <Typography
              fontSize="16px"
              lineHeight="23px"
              fontWeight="400"
              color="rgba(255, 255, 255, 0.7)"
            >
              {subtitle}
            </Typography>

            <HoverPopover info={popoverContent}>
              <Typography
                fontSize="16px"
                lineHeight="23px"
                fontWeight="400"
                color="#FFFFFF"
              >
                {whiteText}
              </Typography>
            </HoverPopover>
          </Stack>
        </Box>
        {showButton && <Button text={buttonText} onClick={onClick} />}
      </Stack>
    </Box>
  );
};

export type OldPageHeaderFifthProps = {
  title: string;
  subtitle: string;
  showButton: boolean;
  popoverContent: React.ReactNode;
  whiteText?: string;
  buttonText: string;
  linkText?: string;
  link?: string;
  onClick?: () => void;
};

export const OldPageHeaderFifth = ({
  title,
  subtitle,
  showButton,
  popoverContent,
  whiteText,
  linkText,
  link,
  onClick,
  buttonText,
}: OldPageHeaderFifthProps) => {
  const defaultStyle = { mb: 3 };

  return (
    <Box sx={{ ...defaultStyle }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography
            fontSize="32px"
            lineHeight="38px"
            fontWeight={400}
            color="white"
          >
            {title}
          </Typography>

          <Stack direction="row" gap={1}>
            <Typography
              fontSize="16px"
              lineHeight="23px"
              fontWeight="400"
              color="rgba(255, 255, 255, 0.7)"
            >
              {subtitle}
            </Typography>

            <HoverPopover info={popoverContent}>
              <Typography
                fontSize="16px"
                lineHeight="23px"
                fontWeight="400"
                color="#FFFFFF"
              >
                {whiteText}
              </Typography>
            </HoverPopover>
            {link && linkText && (
              <Link component={RouterLink} to={link} underline="hover">
                <Typography
                  fontSize="16px"
                  lineHeight="23px"
                  fontWeight="400"
                  color="rgba(255, 255, 255, 0.7)"
                >
                  {linkText}
                </Typography>
              </Link>
            )}
          </Stack>
        </Box>
        {showButton && <Button text={buttonText} onClick={onClick} />}
      </Stack>
    </Box>
  );
};

const MainScreen = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  });

  return (
    <Box overflow="auto" p={4} pb={80}>
      <OldPageHeaderFirst title="Test Page 2" />
      <OldPageHeaderSecond title="Test Page 2" subtitle="SOme sub title" />
      <OldPageHeaderThird
        title="Test Page 2"
        subtitle="SOme sub title"
        onClick={() => console.log("add clicked")}
        buttonText="Add"
        showButton
      />
      <OldPageHeaderForth
        title="Test Page 2"
        subtitle="SOme sub title"
        onClick={() => console.log("add clicked")}
        buttonText="Add"
        showButton
        popoverContent={
          <Box sx={{ p: 2 }}>
            <Typography
              fontSize="16px"
              lineHeight="23px"
              fontWeight="400"
              color="rgba(255, 255, 255, 0.7)"
            >
              Request #123
            </Typography>
          </Box>
        }
        whiteText="sub title text"
      />

      <OldPageHeaderFifth
        title="Test Page 2"
        subtitle="SOme sub title"
        onClick={() => console.log("add clicked")}
        buttonText="Add"
        showButton
        popoverContent={
          <Box sx={{ p: 2 }}>
            <Typography
              fontSize="16px"
              lineHeight="23px"
              fontWeight="400"
              color="rgba(255, 255, 255, 0.7)"
            >
              Request #123
            </Typography>
          </Box>
        }
        //   whiteText='sub title text'
        link="link/to/somewhere"
        linkText="Link to somewhere"
        whiteText={""}
      />

      <Box py={4}>
        <NewPageHeader
          breadcrumbs={<ColorderBox color="red">breadcrumbs</ColorderBox>}
          title={<ColorderBox color="green">title</ColorderBox>}
          subTitle={<ColorderBox color="blue">subTitle</ColorderBox>}
          subtle={<ColorderBox color="yellow">subtle</ColorderBox>}
          actionBar={<ColorderBox color="purple">actionBar</ColorderBox>}
        />
      </Box>

      <Box py={4}>
        <PageHeader
          breadcrumbs={<ColorderBox color="red">breadcrumbs</ColorderBox>}
          title={<ColorderBox color="green">title</ColorderBox>}
          subTitle={<ColorderBox color="blue">subTitle</ColorderBox>}
          subtle={<ColorderBox color="yellow">subtle</ColorderBox>}
          actionBar={<ColorderBox color="purple">actionBar</ColorderBox>}
        />
      </Box>

      <Box py={4}>
        <PageHeader
          breadcrumbs={<ColorderBox color="red">breadcrumbs</ColorderBox>}
          title={<ColorderBox color="green">title</ColorderBox>}
          subTitle={<ColorderBox color="blue">subTitle</ColorderBox>}
          subtle={<ColorderBox color="yellow">subtle</ColorderBox>}
          actionBar={<ColorderBox color="purple">actionBar</ColorderBox>}
        />
      </Box>

      <Box py={4}>
        <PageHeader
          breadcrumbs={<ColorderBox color="red">breadcrumbs</ColorderBox>}
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

      <Box py={4}>
        <PageHeader
          breadcrumbs={
            <Breadcrumbs
              path={[{ label: "Home", link: "/" }, { label: "Demo Page" }]}
            />
          }
          title={
            <SkeletonWrap isLoading={isLoading}>
              <Stack gap={2} flexDirection="row" alignItems="center">
                <IconButton onClick={() => {}} size="small" sx={{ m: 0, p: 0 }}>
                  <Close sx={{ color: "rgba(255, 255, 255, 0.7)" }} />
                </IconButton>
                <Typography
                  fontSize="32px"
                  lineHeight="38px"
                  fontWeight={400}
                  color="white"
                >
                  Text
                </Typography>
                <Status text="Result" />
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    width: "1px",
                    marginY: "unset",
                    bgcolor: "rgba(255, 255, 255, 0.7)",
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                />
                <SkeletonWrap isLoading={isLoading}>
                  <Subtle />
                </SkeletonWrap>
              </Stack>
            </SkeletonWrap>
          }
          subTitle={
            <Stack direction="row" alignItems="center" gap={2} sx={{ mt: 1 }}>
              <Stack direction="row" alignItems="center" gap={1}>
                <Typography
                  fontSize="16px"
                  lineHeight="23px"
                  fontWeight="400"
                  color="rgba(255, 255, 255, 0.7)"
                >
                  subTitle
                </Typography>
                <SkeletonWrap isLoading={isLoading}>
                  <HoverPopover
                    info={
                      <Box sx={{ p: 2 }}>
                        <Typography
                          fontSize="16px"
                          lineHeight="23px"
                          fontWeight="400"
                          color="rgba(255, 255, 255, 0.7)"
                        >
                          Request #123
                        </Typography>
                      </Box>
                    }
                  >
                    <Typography
                      fontSize="16px"
                      lineHeight="23px"
                      fontWeight="400"
                      color="#FFFFFF"
                    >
                      "whiteText"
                    </Typography>
                  </HoverPopover>
                </SkeletonWrap>
              </Stack>

              <Circle
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: 8,
                }}
              />
              <Stack direction="row" gap={1}>
                <Typography
                  fontSize="16px"
                  lineHeight="23px"
                  fontWeight="400"
                  color="rgba(255, 255, 255, 0.7)"
                >
                  Request:
                </Typography>
                <SkeletonWrap isLoading={isLoading}>
                  <Link
                    component={RouterLink}
                    to="link/to/somewhere"
                    underline="hover"
                  >
                    <Typography
                      fontSize="16px"
                      lineHeight="23px"
                      fontWeight="400"
                      color="rgba(255, 255, 255, 0.7)"
                    >
                      Request #123
                    </Typography>
                  </Link>
                </SkeletonWrap>
              </Stack>
              <SkeletonWrap isLoading={isLoading}>
                <Status text="Booked" color="error" />
              </SkeletonWrap>
            </Stack>
          }
          subtle={
            <Stack direction="row" width="100%" gap={2}>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  width: "1px",
                  marginY: "unset",
                  bgcolor: "rgba(255, 255, 255, 0.7)",
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              />
              <SkeletonWrap isLoading={isLoading}>
                <Subtle />
              </SkeletonWrap>
            </Stack>
          }
          actionBar={
            <SkeletonWrap isLoading={isLoading}>
              <Stack gap={1} flexDirection="row">
                <Button text="someText" />
                <Button text="someText" variant="text" />
              </Stack>
            </SkeletonWrap>
          }
        />
      </Box>

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
                  <Close sx={{ color: "rgba(255, 255, 255, 0.7)" }} />
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
            <SkeletonWrap isLoading={isLoading}>
              <Stack gap={1} flexDirection="row">
                <Button text="someText" />
                <Button text="someText" variant="text" />
              </Stack>
            </SkeletonWrap>
          }
        />
      </Box>

      <Box py={4}>
        <PageHeaderWithLoader
          isLoading={isLoading}
          breadcrumbs={
            <Breadcrumbs
              path={[{ label: "Home", link: "/" }, { label: "Demo Page" }]}
            />
          }
          title={
            <PageHeaderTitleWithLoader
              action={
                <IconButton onClick={() => {}} size="small" sx={{ m: 0, p: 0 }}>
                  <Close sx={{ color: "rgba(255, 255, 255, 0.7)" }} />
                </IconButton>
              }
              info={<Status text="Result" />}
              text="Text"
              extraAction={<Subtle />}
            />
          }
          subTitle={
            <PageHeaderSubtitleWithLoader
              leftSide={
                <PageHeaderSubtitleItemWithLoader
                  subtitleText="subTitle"
                  hightlightedText="whiteText"
                  hoverText="Request #123"
                />
              }
              rightSide={
                <PageHeaderSubtitleLinkItemWithLoader
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
    </Box>
  );
};

export default MainScreen;
