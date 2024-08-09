import { ButtonProps, Button as MuiButton } from "@mui/material";

export const Button = ({
  text,
  variant = "contained",
  ...restProps
}: ButtonProps & { text: string }) => (
  <MuiButton
    color="primary"
    variant={variant}
    {...restProps}
    sx={{
      minWidth: "62px",
    }}
  >
    {text}
  </MuiButton>
);
