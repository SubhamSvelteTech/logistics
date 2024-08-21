import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Typography } from "@mui/material";

const timelineData = [
  { id: 1, title: "Sample Collection", status: "done", date: "17 June 2023" },
  {
    id: 2,
    title: "Sample testing",
    status: "inProgress",
    date: "19 june 2023",
  },
  { id: 3, title: "Reports generating", status: "pending", date: "NA" },
  { id: 4, title: "Reports uploaded", status: "pending", date: "NA" },
  { id: 5, title: "Reports Shared with doctor", status: "pending", date: "NA" },
  { id: 6, title: "Reports Downloaded", status: "pending", date: "NA" },
];

export default function TimelineComponent() {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {timelineData?.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator
            sx={{
              // Apply conditional styling based on item.status
              "& .MuiTimelineDot-root": {
                backgroundColor: item.status === "done" ? "#10C200" : item.status === "inProgress" ? "#2682EE" : "",
                borderColor: item.status === "done" ? "#10C200" : item.status === "inProgress" ? "#2682EE" : "black",
              },
              "& .MuiTimelineConnector-root": {
                backgroundColor: item.status === "done" ? "#10C200" : "",
              },
            }}
          >
            <TimelineDot
              variant="outlined"
              sx={{ width: 20, height: 20 }} // Increase size
            />
            {/* Conditionally render TimelineConnector */}
            {index < timelineData.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <p
              className={`text-sm font-bold ${
                item.status === "done" ? "text-[#10C200]" : "text-[#545454]"
              }`}
            >
              {item.title}
            </p>
            <p className={`text-xs ${item.status === "done" ? "text-[#10C200]" : "text-[#545454]"}`}>
              {item?.date}
            </p>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
