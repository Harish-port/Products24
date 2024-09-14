import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Box, Tooltip } from "@mui/material";

export default function AdminNotification() {
  return (
    <Box pr={1} alignContent="center">
      <Badge badgeContent={4} color="primary">
        <Tooltip title="Notifications">
          <NotificationsIcon color="action" sx={{ cursor: "pointer" }} />
        </Tooltip>
      </Badge>
    </Box>
  );
}
