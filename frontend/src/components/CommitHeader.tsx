import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Link,
  Typography,
} from "@mui/material";

interface CommitHeaderProps {
  author: {
    name: string;
    date: string;
  };
  message: string;
  sha: string;
  parentSha: string;
  avatarUrl?: string;
}

const CommitHeader: React.FC<CommitHeaderProps> = ({
  author,
  message,
  sha,
  parentSha,
  avatarUrl
}) => {
  return (
    <Card
      elevation={0}
      sx={{
        marginBottom: 3,
        padding: 2,
        borderRadius: 2,
        backgroundColor: "#FBFDFF",
        border: "1px solid #E7EBF1",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "24px",
            color: "#39496A",
          }}
        >
          {message}
        </Typography>

        <Box display="flex" alignItems="center" marginTop={1} gap={1.5}>
          <Avatar
            src={avatarUrl || "/default-avatar.png"}
            alt={author.name}
            sx={{ width: 40, height: 40 }}
          />
          <Box>
            <Typography
              variant="body2"
              color="#60727C"
              sx={{ fontSize: "14px", lineHeight: "20px" }}
            >
              Authored by <strong>{author.name}</strong> &#x1F4C5;{" "}
              {new Date(author.date).toLocaleString()}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box marginTop={1}>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Courier New",
              fontSize: "13px",
              color: "#606770",
            }}
          >
            &#x1F4CC; <strong>Commit:</strong> {sha}{" "}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontFamily: "Courier New",
              fontSize: "13px",
              color: "#606770",
              marginTop: 0.5,
            }}
          >
            ⤷ <strong>Parent:</strong>{" "}
            <Link
              href={`${parentSha}`}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontFamily: "Courier New",
                fontWeight: "bold",
                color: "#0072c6",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {parentSha || "N/A"}
            </Link>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CommitHeader;
