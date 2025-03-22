import React from "react";
import { Box, Typography } from "@mui/material";

interface DiffViewerProps {
  hunks: string;
}

const DiffViewer: React.FC<DiffViewerProps> = ({ hunks }) => {
  if (!hunks) {
    return <Typography>No changes found.</Typography>;
  }

  const lines = hunks.split("\n");

  return (
    <Box
      component="pre"
      p={2}
      bgcolor="#f5f5f5"
      borderRadius={1}
      overflow="auto"
      fontSize={14}
    >
      {lines.map((line, index) => (
        <Typography
          key={index}
          component="div"
          style={{
            backgroundColor: line.startsWith("+")
              ? "#e6ffed"
              : line.startsWith("-")
              ? "#ffeef0"
              : "transparent",
            color: line.startsWith("+")
              ? "#2cbe4e"
              : line.startsWith("-")
              ? "#cb2431"
              : "inherit",
            padding: "2px 8px",
            fontFamily: "monospace",
          }}
        >
          {line}
        </Typography>
      ))}
    </Box>
  );
};

export default DiffViewer;
