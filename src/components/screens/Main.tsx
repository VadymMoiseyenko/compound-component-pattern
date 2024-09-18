import { Box } from "@mui/material";

import { ChapterOne } from "./chapter1/ChapterOne";
import { ChapterTwo } from "./chapter2/ChapterTwo";
import { ChapterThree } from "./chapter3/ChapterThree";
import { ChapterFour } from "./chapter4/ChapterFour";

const MainScreen = () => {
  return (
    <Box overflow="auto" p={4} pb={80}>
      <ChapterOne />
      {/* <ChapterTwo /> */}
      {/* <ChapterThree /> */}
      {/* <ChapterFour /> */}
    </Box>
  );
};

export default MainScreen;
