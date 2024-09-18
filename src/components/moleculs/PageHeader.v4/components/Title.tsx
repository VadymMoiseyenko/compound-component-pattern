import { Divider, Stack, Typography } from "@mui/material";
import { SkeletonWrap } from "../../../atoms/SkeletonWrap";
import { usePageHeaderContext } from "../PageHeader";

export type IProps = {
  text: string;
  action: React.ReactNode;
  info: React.ReactNode;
  extraAction?: React.ReactNode;
};

export const Title = (props: IProps) => {
  const { text, action, info, extraAction } = props;
  const { isLoading } = usePageHeaderContext();

  return (
    <SkeletonWrap isLoading={isLoading}>
      <Stack gap={2} flexDirection="row" alignItems="center">
        {action}
        <Typography
          fontSize="32px"
          lineHeight="38px"
          fontWeight={400}
          color="white"
        >
          {text}
        </Typography>
        {info}
        {extraAction && (
          <>
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
            {extraAction}
          </>
        )}
      </Stack>
    </SkeletonWrap>
  );
};
