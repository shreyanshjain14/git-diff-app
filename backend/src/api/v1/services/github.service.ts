import axios from "axios";
import config from "../../../config/config";

const apiClient = axios.create({
  baseURL: config.githubApiBaseUrl,
  headers: {
    Authorization: `token ${config.githubAccessToken}`,
    Accept: "application/vnd.github.v3+json",
  },
});

const fetchCommitMetadata = async (owner: string, repository: string, oid: string) => {
  const response = await apiClient.get(`/repos/${owner}/${repository}/commits/${oid}`);
  return response.data;
};

const fetchCommitDiff = async (owner: string, repository: string, oid: string) => {
  const response = await apiClient.get(`/repos/${owner}/${repository}/commits/${oid}`);
  return response.data.files;
};

export default {
  fetchCommitMetadata,
  fetchCommitDiff,
};
