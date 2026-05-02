# Campus Notification Platform

A production-grade full-stack campus notification management system developed for coding evaluation.

## Overview

This platform helps students efficiently manage high volumes of campus notifications related to:

- Placements
- Results
- Events

The system introduces a **Priority Inbox** that intelligently ranks unread notifications using notification type importance and recency.

---

# Tech Stack

## Frontend
- Next.js (React)
- TypeScript
- Material UI
- CSS

## Backend
- Node.js
- TypeScript
- Axios
- dotenv

## Logging Middleware
- Custom reusable logging package
- Protected API integration
- Fault-tolerant fallback architecture

---

# Repository Structure

```bash
RA2311032010041/
│
├── logging_middleware/
│   ├── src/
│   │   ├── register.ts
│   │   ├── auth.ts
│   │   └── logger.ts
│
├── notification_app_be/
│   ├── src/
│   │   ├── notifications.ts
│   │   ├── priorityInbox.ts
│   │   └── index.ts
│
├── notification_app_fe/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   └── services/
│
├── notification_system_design.md
└── README.md
