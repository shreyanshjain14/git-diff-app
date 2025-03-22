import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCommitMetadata } from "../api/api";
import {
  Collapse,
  IconButton,
  Typography,
  Box,
  Container,
  Paper,
  CircularProgress,
} from "@mui/material";
import DiffViewer from "../components/CommitDiff";
import CommitHeader from "../components/CommitHeader";

const CommitPage: React.FC = () => {
  const { owner, repo, commitSHA } = useParams<{
    owner: string;
    repo: string;
    commitSHA: string;
  }>();

  const [commitData, setCommitData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [expandedFiles, setExpandedFiles] = useState<Record<string, boolean>>(
    {}
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const metadata = await fetchCommitMetadata(owner!, repo!, commitSHA!);
        setCommitData(metadata);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [owner, repo, commitSHA]);

  const toggleFile = (filename: string) => {
    setExpandedFiles((prev) => ({
      ...prev,
      [filename]: !prev[filename],
    }));
  };

  if (loading) {
    return (
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!commitData) {
    return (
      <Box textAlign="center" mt={5}>
        <Typography variant="h6" color="error">
          Error loading commit data.
        </Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <CommitHeader
          author={commitData.commit.author}
          message={commitData.commit.message}
          sha={commitData.sha}
          parentSha={commitData.parents[0]?.sha || "N/A"}
          avatarUrl={commitData.author?.avatar_url}
        />

        <Box mt={3}>
          {commitData.files.map((file: any) => (
            <Box key={file.filename} mt={2}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                bgcolor="#f4f4f8"
                p={1.5}
                borderRadius={1}
                onClick={() => toggleFile(file.filename)}
                sx={{
                  cursor: "pointer",
                  "&:hover": { bgcolor: "#e0e0e0" },
                  transition: "background-color 0.2s",
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  {file.filename}
                </Typography>
                <IconButton size="small">
                  <Typography
                    component="span"
                    sx={{
                      transform: expandedFiles[file.filename]
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.2s",
                      fontSize: 18,
                    }}
                  >
                    {expandedFiles[file.filename] ? "▼" : "▶"}
                  </Typography>
                </IconButton>
              </Box>

              <Collapse in={expandedFiles[file.filename]}>
                <Box
                  mt={1}
                  p={2}
                  sx={{
                    bgcolor: "#f9f9f9",
                    border: "1px solid #ddd",
                    borderRadius: 1,
                  }}
                >
                  <DiffViewer hunks={file.patch || ""} />
                </Box>
              </Collapse>
            </Box>
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default CommitPage;
