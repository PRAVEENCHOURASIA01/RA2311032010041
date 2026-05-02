import axios from "axios";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const BASE_URL = process.env.BASE_URL;

async function register() {
  try {
    const response = await axios.post(`${BASE_URL}/register`, {
      email: process.env.EMAIL,
      name: process.env.NAME,
      mobileNo: process.env.MOBILE,
      githubUsername: process.env.GITHUB_USERNAME,
      rollNo: process.env.ROLL_NO,
      accessCode: process.env.ACCESS_CODE,
    });

    console.log("Registration Success:", response.data);

    fs.appendFileSync(
      ".env",
      `\nCLIENT_ID=${response.data.clientID}\nCLIENT_SECRET=${response.data.clientSecret}\n`
    );
  } catch (error: any) {
    console.error("Registration Failed:", error.response?.data || error.message);
  }
}

register();