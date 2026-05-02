import axios from "axios";

const BASE_URL = "http://20.207.122.201/evaluation-service";

export const mockNotifications = [
  {
    ID: "1",
    Type: "Placement",
    Message: "Google hiring",
    Timestamp: "2026-04-22 17:51:18",
  },
  {
    ID: "2",
    Type: "Result",
    Message: "Mid-sem results",
    Timestamp: "2026-04-22 17:51:30",
  },
  {
    ID: "3",
    Type: "Event",
    Message: "Tech Fest",
    Timestamp: "2026-04-22 17:50:06",
  },
  {
    ID: "4",
    Type: "Placement",
    Message: "Microsoft hiring",
    Timestamp: "2026-04-22 17:49:42",
  },
  {
    ID: "5",
    Type: "Result",
    Message: "Project review",
    Timestamp: "2026-04-22 17:50:42",
  }
];

export async function fetchNotifications() {
  try {
    const token = process.env.NEXT_PUBLIC_AUTH_TOKEN;

    const response = await axios.get(`${BASE_URL}/notifications`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.notifications;
  } catch (error) {
    return mockNotifications;
  }
}