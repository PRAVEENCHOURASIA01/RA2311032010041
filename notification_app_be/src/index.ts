import { fetchNotifications } from "./notifications";
import { getTopNotifications } from "./priorityInbox";
import { Log } from "../../logging_middleware/src/logger";

async function main() {
  try {
    await Log("backend", "info", "controller", "Stage 1 execution started");

    const notifications = await fetchNotifications();
    const topNotifications = await getTopNotifications(notifications, 10);

    console.log("\n===== TOP 10 PRIORITY NOTIFICATIONS =====\n");

    topNotifications.forEach((notification, index) => {
      console.log(`${index + 1}. [${notification.Type}]`);
      console.log(`Message: ${notification.Message}`);
      console.log(`Timestamp: ${notification.Timestamp}`);
      console.log(`ID: ${notification.ID}`);
      console.log("-----------------------------------");
    });

    await Log(
      "backend",
      "info",
      "controller",
      "Stage 1 execution completed successfully"
    );
  } catch (error: any) {
    await Log(
      "backend",
      "fatal",
      "controller",
      `Stage 1 failed: ${error.message}`
    );

    console.error("Execution failed:", error.message);
  }
}

main();