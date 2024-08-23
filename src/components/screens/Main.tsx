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
} from "../moleculs/PageHeader.v3/PageHeader";
import { Button } from "../atoms/Button";
import { Breadcrumbs } from "../atoms/Breadcrumbs";
import { HoverPopover } from "../atoms/HoverPopover";
import { ColorderBox } from "../atoms/ColordedBox";
import { Status } from "../atoms/Status";
import { Subtle } from "../atoms/Subtle";
import { useEffect, useState } from "react";
import { PageHeaderTitle } from "../moleculs/PageHeader.v3/components/PageHeaderTitle";
import { PageHeaderTitle as PageHeaderTitleWithLoader } from "../moleculs/PageHeader.v4/components/PageHeaderTitle";
import { PageHeaderSubtitle } from "../moleculs/PageHeader.v3/components/PageHeaderSubtitle";
import { PageHeaderSubtitle as PageHeaderSubtitleWithLoader } from "../moleculs/PageHeader.v4/components/PageHeaderSubtitle";
import { PageHeaderSubtitleItem } from "../moleculs/PageHeader.v3/components/PageHeaderSubtitleItem";
import { PageHeaderSubtitleItem as PageHeaderSubtitleItemWithLoader } from "../moleculs/PageHeader.v4/components/PageHeaderSubtitleItem";
import { PageHeaderSubtitleLinkItem } from "../moleculs/PageHeader.v3/components/PageHeaderSubtitleLinkItem";
import { PageHeaderSubtitleLinkItem as PageHeaderSubtitleLinkItemWithLoader } from "../moleculs/PageHeader.v4/components/PageHeaderSubtitleLinkItem";
import { PageHeaderWithLoader } from "../moleculs/PageHeader.v4/PageHeader";
import {
  OldPageHeaderFifth,
  OldPageHeaderFirst,
  OldPageHeaderForth,
  OldPageHeaderSecond,
  OldPageHeaderThird,
} from "../moleculs/PageHeader.v1";
import { ChapterOne } from "./chapter1/ChapterOne";
import { ChapterThree } from "./chapter3/ChapterThree";
import { ChapterFour } from "./chapter4/ChapterFour";
import { ChapterTwo } from "./chapter2/ChapterTwo";

// export type OldPageHeaderLastProps = {
//   onAddClick: () => void;
//   title: string;
//   subTitle: string;
//   popoverContent: React.ReactNode;
//   whiteText: string;
//   isLoading?: boolean;
//   isSectionHeader?: boolean;
// };

// export const OldPageHeaderLast = ({
//   onAddClick,
//   title,
//   subTitle,
//   popoverContent,
//   whiteText,
// }: OldPageHeaderLastProps) => {
//   return (
//     <Box sx={{ mb: 3 }}>
//       <Stack direction="row" justifyContent="space-between" alignItems="center">
//         <Stack
//           direction="row"
//           justifyContent="flex-start"
//           alignItems="center"
//           gap={3}
//         >
//           <Stack direction="row" alignItems="center" gap={3}>
//             <Typography
//               fontSize="32px"
//               lineHeight="38px"
//               fontWeight={400}
//               color="white"
//             >
//               {title}
//             </Typography>
//           </Stack>
//         </Stack>
//         <Stack direction="row" alignItems="center" gap={2} sx={{ mt: 1 }}>
//           <Stack direction="row" gap={1}>
//             <Typography
//               fontSize="16px"
//               lineHeight="23px"
//               fontWeight="400"
//               color="rgba(255, 255, 255, 0.7)"
//             >
//               {subTitle}
//             </Typography>

//             <HoverPopover info={popoverContent}>
//               <Typography
//                 fontSize="16px"
//                 lineHeight="23px"
//                 fontWeight="400"
//                 color="#FFFFFF"
//               >
//                 {whiteText}
//               </Typography>
//             </HoverPopover>
//           </Stack>

//           <Circle
//             sx={{
//               color: "rgba(255, 255, 255, 0.7)",
//               fontSize: 8,
//             }}
//           />
//           <Stack direction="row" gap={1}>
//             <Typography
//               fontSize="16px"
//               lineHeight="23px"
//               fontWeight="400"
//               color="rgba(255, 255, 255, 0.7)"
//             >
//               Request:
//             </Typography>
//             <Link
//               component={RouterLink}
//               to="link/to/somewhere"
//               underline="hover"
//             >
//               <Typography
//                 fontSize="16px"
//                 lineHeight="23px"
//                 fontWeight="400"
//                 color="rgba(255, 255, 255, 0.7)"
//               >
//                 Request #123
//               </Typography>
//             </Link>
//           </Stack>
//         </Stack>
//         <Stack gap={1} flexDirection="row">
//           <Button text="Add" onClick={onAddClick} />
//         </Stack>
//       </Stack>
//     </Box>
//   );
// };

const MainScreen = () => {
  return (
    <Box overflow="auto" p={4} pb={80}>
      {/* <ChapterOne /> */}
      {/* <ChapterTwo /> */}
      {/* <ChapterThree /> */}
      <ChapterFour />
    </Box>
  );
};

export default MainScreen;
