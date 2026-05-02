"use client";

import Link from "next/link";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Campus Notifications
        </Typography>

        <Button color="inherit" component={Link} href="/">
          All Notifications
        </Button>

        <Button color="inherit" component={Link} href="/priority">
          Priority Inbox
        </Button>
      </Toolbar>
    </AppBar>
  );
}