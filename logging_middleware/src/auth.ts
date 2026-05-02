import axios from "axios";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const BASE_URL = process.env.BASE_URL;

async function authenticate() {
  try {
    const response = await axios.post(`${BASE_URL}/auth`, {
      email: process.env.EMAIL,
      name: process.env.NAME,
      rollNo: process.env.ROLL_NO,
      accessCode: process.env.ACCESS_CODE,
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    });

    console.log("Authentication Success:", response.data);

    fs.appendFileSync(
      ".env",
      `\nAUTH_TOKEN=${response.data.access_token}\n`
    );
  } catch (error: any) {
    console.error("Authentication Failed:", error.response?.data || error.message);
  }
}

authenticate();