import axios from "axios";
import dotenv from "dotenv";
import { Log } from "../../logging_middleware/src/logger";

dotenv.config();

const BASE_URL = process.env.BASE_URL;
const AUTH_TOKEN = process.env.AUTH_TOKEN;

export interface Notification {
  ID: string;
  Type: "Placement" | "Result" | "Event";
  Message: string;
  Timestamp: string;
}

const mockNotifications: Notification[] = [
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

export async function fetchNotifications(): Promise<Notification[]> {
  try {
    await Log("backend", "info", "api", "Fetching notifications from API");

    const response = await axios.get(`${BASE_URL}/notifications`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    });

    return response.data.notifications;
  } catch (error: any) {
    await Log(
      "backend",
      "warn",
      "api",
      "API unavailable, using mock notifications dataset"
    );

    return mockNotifications;
  }
}