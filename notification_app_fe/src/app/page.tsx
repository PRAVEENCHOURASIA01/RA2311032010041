"use client";

import { useEffect, useState } from "react";
import { fetchNotifications } from "../services/api";
import NotificationCard from "../components/NotificationCard";
import FilterBar from "../components/FilterBar";
import { Container, Typography } from "@mui/material";

export default function HomePage() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchNotifications().then(setNotifications);
  }, []);

  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter((n) => n.Type === filter);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom sx={{ mt: 3 }}>
        All Notifications
      </Typography>

      <FilterBar filter={filter} setFilter={setFilter} />

      {filteredNotifications.map((notification) => (
        <NotificationCard
          key={notification.ID}
          notification={notification}
          viewed={false}
        />
      ))}
    </Container>
  );
}