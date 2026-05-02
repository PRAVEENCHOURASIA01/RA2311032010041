import { Notification } from "./notifications";
import { Log } from "../../logging_middleware/src/logger";

const TYPE_WEIGHTS = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

function calculatePriority(notification: Notification): number {
  const weight = TYPE_WEIGHTS[notification.Type];
  const recencyScore = new Date(notification.Timestamp).getTime() / 1000000000;

  return weight * 100000 + recencyScore;
}

export async function getTopNotifications(
  notifications: Notification[],
  topN: number = 10
): Promise<Notification[]> {
  try {
    await Log(
      "backend",
      "info",
      "service",
      `Calculating top ${topN} priority notifications`
    );

    const sortedNotifications = notifications
      .map((notification) => ({
        ...notification,
        priorityScore: calculatePriority(notification),
      }))
      .sort((a, b) => b.priorityScore - a.priorityScore)
      .slice(0, topN);

    await Log(
      "backend",
      "info",
      "service",
      `Priority inbox generated successfully`
    );

    return sortedNotifications;
  } catch (error: any) {
    await Log(
      "backend",
      "error",
      "service",
      `Priority calculation failed: ${error.message}`
    );

    throw error;
  }
}