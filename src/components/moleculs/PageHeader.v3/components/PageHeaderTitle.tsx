import { Divider, Stack, Typography } from "@mui/material";

export type IProps = {
  text: string;
  action: React.ReactNode;
  info: React.ReactNode;
  extraAction?: React.ReactNode;
};

export const PageHeaderTitle = (props: IProps) => {
  const { text, action, info, extraAction } = props;

  return (
    <Stack gap={2} flexDirection="row" alignItems="center">
      {action}
      <Typography variant="h4">{text}</Typography>
      {info}
      {extraAction && (
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            width: "1px",
            bgcolor: "rgba(255, 255, 255, 0.7)",
          }}
        />
      )}

      {extraAction}
    </Stack>
  );
};
