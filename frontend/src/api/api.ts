import axios from "axios";

export const API_BASE_URL = "http://localhost:5000/api/repositories";

export const fetchCommitMetadata = async (
  owner: string,
  repo: string,
  commitSHA: string
) => {
  const response = await axios.get(
    `${API_BASE_URL}/${owner}/${repo}/commits/${commitSHA}`
  );
  return response.data;
};

// Fetch commit diff
export const fetchCommitDiff = async (
  owner: string,
  repo: string,
  commitSHA: string
) => {
  const response = await axios.get(
    `${API_BASE_URL}/${owner}/${repo}/commits/${commitSHA}/diff`
  );
  return response.data;
};
