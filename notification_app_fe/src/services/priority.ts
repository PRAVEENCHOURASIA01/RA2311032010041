const TYPE_WEIGHTS: Record<string, number> = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export function getTopNotifications(
  notifications: any[],
  topN: number
) {
  return notifications
    .map((notification) => ({
      ...notification,
      priority:
        TYPE_WEIGHTS[notification.Type] * 100000 +
        new Date(notification.Timestamp).getTime() / 1000000000,
    }))
    .sort((a, b) => b.priority - a.priority)
    .slice(0, topN);
}