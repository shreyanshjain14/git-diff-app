import dotenv from "dotenv";
dotenv.config();

const config = {
  port: process.env.PORT || 5000,
  githubApiBaseUrl: process.env.GITHUB_API_BASE_URL || "https://api.github.com",
  githubAccessToken: process.env.GITHUB_ACCESS_TOKEN || "",
};

if (!config.githubAccessToken) {
  throw new Error("Missing GitHub Access Token in .env file.");
}

export default config;
