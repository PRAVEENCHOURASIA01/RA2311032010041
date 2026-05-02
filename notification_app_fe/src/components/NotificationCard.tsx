"use client";

import {
  Card,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";

export default function NotificationCard({
  notification,
  viewed,
}: {
  notification: any;
  viewed: boolean;
}) {
  return (
    <Card
      sx={{
        marginBottom: 2,
        backgroundColor: viewed ? "#f0f0f0" : "#ffffff",
      }}
    >
      <CardContent>
        <Typography variant="h6">
          {notification.Message}
        </Typography>

        <Typography variant="body2">
          {notification.Timestamp}
        </Typography>

        <Chip
          label={notification.Type}
          sx={{ marginTop: 1 }}
        />
      </CardContent>
    </Card>
  );
}