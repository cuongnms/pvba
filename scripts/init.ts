import "dotenv/config";
import { initIndexes } from "../db/initIndex.js";

async function run() {
  try {
    console.log("🔧 Initializing MongoDB indexes...");

    await initIndexes();

    console.log("✅ MongoDB indexes initialized successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Failed to initialize MongoDB indexes");
    console.error(error);
    process.exit(1);
  }
}

run();
