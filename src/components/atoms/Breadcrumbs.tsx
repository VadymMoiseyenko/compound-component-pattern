import { Breadcrumbs as BreadcrumbsMUI, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { NavigateNext } from "@mui/icons-material";

export const Breadcrumbs = ({
  path,
}: {
  path: { label: string; link?: string }[];
}) => (
  <BreadcrumbsMUI
    separator={
      <NavigateNext
        fontSize="small"
        sx={{ color: "rgba(255, 255, 255, 0.7)" }}
      />
    }
    sx={{ mb: 0.5 }}
  >
    {path.map(({ label, link }) =>
      link ? (
        <Link
          key={label}
          to={link}
          component={RouterLink}
          sx={{ color: "rgba(255, 255, 255, 0.87)", textDecoration: "none " }}
          data-testid="link"
        >
          {label}
        </Link>
      ) : (
        <Typography
          key={label}
          sx={{ color: "rgba(255, 255, 255, 0.5)" }}
          data-testid="text"
        >
          {label}
        </Typography>
      )
    )}
  </BreadcrumbsMUI>
);
