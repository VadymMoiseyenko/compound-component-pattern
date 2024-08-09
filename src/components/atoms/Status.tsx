import { Chip, ChipProps } from "@mui/material";

interface StatusProps {
  text: string;
  color?: ChipProps["color"];
}

export const Status = ({ text, color = "success" }: StatusProps) => (
  <Chip
    color={color}
    size="small"
    variant="filled"
    label={text}
    sx={{ borderRadius: "6px" }}
  />
);
