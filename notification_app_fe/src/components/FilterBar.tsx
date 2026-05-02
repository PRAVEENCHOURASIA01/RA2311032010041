"use client";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

export default function FilterBar({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: (value: string) => void;
}) {
  return (
    <FormControl fullWidth sx={{ marginBottom: 3 }}>
      <InputLabel>Filter Type</InputLabel>

      <Select
        value={filter}
        label="Filter Type"
        onChange={(e) => setFilter(e.target.value)}
      >
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Placement">Placement</MenuItem>
        <MenuItem value="Result">Result</MenuItem>
        <MenuItem value="Event">Event</MenuItem>
      </Select>
    </FormControl>
  );
}