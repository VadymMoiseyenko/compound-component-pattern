import { FormControl, MenuItem, Select } from "@mui/material";

export const Subtle = () => (
  <FormControl variant="standard" sx={{ color: "white" }}>
    <Select
      value={10}
      onChange={() => {}}
      label="Age"
      sx={{
        color: "white",
        ".MuiSvgIcon-root": { color: "white" },
        "&::after": { borderBottom: "none" },
      }}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  </FormControl>
);
