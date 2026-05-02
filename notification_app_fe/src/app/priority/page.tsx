"use client";

import { useEffect, useState } from "react";
import { fetchNotifications } from "../../services/api";
import { getTopNotifications } from "../../services/priority";
import NotificationCard from "../../components/NotificationCard";
import {
  Container,
  Typography,
  Slider,
} from "@mui/material";

export default function PriorityPage() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [topN, setTopN] = useState(10);

  useEffect(() => {
    fetchNotifications().then((data) => {
      setNotifications(getTopNotifications(data, topN));
    });
  }, [topN]);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom sx={{ mt: 3 }}>
        Priority Inbox
      </Typography>

      <Typography gutterBottom>
        Top {topN} Notifications
      </Typography>

      <Slider
        value={topN}
        min={1}
        max={20}
        step={1}
        valueLabelDisplay="auto"
        onChange={(_, value) =>
          setTopN(value as number)
        }
        sx={{ mb: 4 }}
      />

      {notifications.map((notification) => (
        <NotificationCard
          key={notification.ID}
          notification={notification}
          viewed={false}
        />
      ))}
    </Container>
  );
}