import { Box, Typography } from "@mui/material";
import {
  OldPageHeaderFifth,
  OldPageHeaderFirst,
  OldPageHeaderForth,
  OldPageHeaderSecond,
  OldPageHeaderThird,
} from "../../moleculs/PageHeader.v1";

export const ChapterOne = () => (
  <Box>
    <OldPageHeaderFirst title="Test Page" />
    {/* //---------------------------------- */}
    <OldPageHeaderSecond title="Test Page 2" subtitle="SOme sub title" />
    {/* //---------------------------------- */}
    <OldPageHeaderThird
      title="Test Page 2"
      subtitle="SOme sub title"
      onClick={() => console.log("add clicked")}
      buttonText="Add"
      showButton
    />
    {/* //---------------------------------- */}
    <OldPageHeaderForth
      title="Test Page 2"
      subtitle="SOme sub title"
      onClick={() => console.log("add clicked")}
      buttonText="Add"
      showButton
      popoverContent={
        <Box sx={{ p: 2 }}>
          <Typography variant="subtitle2">Request #123</Typography>
        </Box>
      }
      whiteText="sub title text"
    />
    {/* //---------------------------------- */}
    <OldPageHeaderFifth
      title="Test Page 2"
      subtitle="SOme sub title"
      onClick={() => console.log("add clicked")}
      buttonText="Add"
      showButton
      link="link/to/somewhere"
      linkText="Link to somewhere"
    />
    {/* //---------------------------------- */}
    {/* <OldPageHeaderHypotetic
      title="Test Page 2"
      subtitle="SOme sub title"
      onClick={() => console.log("add clicked")}
      buttonText="Add"
      showButton
      link="link/to/somewhere"
      linkText="Link to somewhere"
      breadCrumbsPath={["Home", "DemoPage"]}
      titleIcon={}
      onTitleIconClick={}
      status={}
      extraStatus={}
      subtleOptions={}
      subtle={}
      extraButtononClick={() => console.log("add clicked")}
      extraButtonText="Add"
      showExtraButton
      extaSubtitle="SOme sub title"
      popoverContent={
        <Box sx={{ p: 2 }}>
          <Typography variant="subtitle2">Request #123</Typography>
        </Box>
      }
      whiteText="sub title text"
    /> */}
  </Box>
);

// type OldPageHeaderHypoteticType = {
//   title: string;
//   subtitle?: string;
//   onClick?: () => void;
//   buttonText?: string;
//   showButton?: boolean;
//   link?: string;
//   linkText?: string;
//   breadCrumbsPath?: string[];
//   titleIcon?: Icon;
//   onTitleIconClick?: () => void;
//   status?: string;
//   extraStatus?: string;
//   subtleOptions?: string[];
//   subtle?: string;
//   extraButtononClick?: () => void;
//   extraButtonText?: string;
//   showExtraButton?: boolean;
//   extaSubtitle?: string;
//   popoverContent?: string;
//   whiteText?: string;
// };
