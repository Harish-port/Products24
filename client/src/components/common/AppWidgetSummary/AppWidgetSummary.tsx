import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import type { SxProps } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { SvgIconProps } from "@mui/material";
export interface BudgetProps {
  diff?: number;
  trend: "up" | "down";
  sx?: SxProps;
  value: string;
  title: string;
  iconBgColor: string;
  icon: any;
}

export function Budget({
  diff,
  trend,
  sx,
  value,
  title,
  icon,
  iconBgColor,
}: BudgetProps): React.JSX.Element {
  const TrendIcon = trend === "up" ? ArrowUpwardIcon : ArrowDownwardIcon;
  const trendColor =
    trend === "up"
      ? "var(--mui-palette-success-main)"
      : "var(--mui-palette-error-main)";

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={3}>
          <Stack
            direction="row"
            sx={{ alignItems: "flex-start", justifyContent: "space-between" }}
            spacing={3}
          >
            <Stack spacing={1}>
              <Typography color="text.secondary" variant="overline">
                {title}
              </Typography>
              <Typography variant="h4">{value}</Typography>
            </Stack>
            <Avatar
              sx={{
                backgroundColor: `${iconBgColor}`,
                height: "56px",
                width: "56px",
              }}
            >
              {icon}
            </Avatar>
          </Stack>
          {diff ? (
            <Stack sx={{ alignItems: "center" }} direction="row" spacing={2}>
              <Stack
                sx={{ alignItems: "center" }}
                direction="row"
                spacing={0.5}
              >
                <TrendIcon
                  color={trendColor}
                  fontSize="var(--icon-fontSize-md)"
                />
                <Typography color={trendColor} variant="body2">
                  {diff}%
                </Typography>
              </Stack>
              <Typography color="text.secondary" variant="caption">
                Since last month
              </Typography>
            </Stack>
          ) : null}
        </Stack>
      </CardContent>
    </Card>
  );
}
