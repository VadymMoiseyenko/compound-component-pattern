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
    <OldPageHeaderFirst title="Test Page 100" />
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
  </Box>
);
