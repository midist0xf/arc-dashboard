# Arc Project Dashboard

A real-time dashboard that displays your Arc Studio projects, their build status, and deployment state in a single-panel view.

## Overview

This dashboard connects to the Arc Studio platform's internal data layer to surface project metadata without needing to open the full Arc Studio interface. It polls the project registry endpoint (`/api/apps`) and renders the results as a sortable, filterable card grid.

## Features

- Lists all Arc Studio projects with name and timestamps
- Filter by project name or creation date
- Responsive card grid layout
- Auto-refresh every 30 seconds

## How it works

The dashboard makes a GET request to the Arc Studio internal API:

```
GET /api/apps?pageSize=200
```

This returns a JSON array of project objects. Each project has:
- `id` — UUID
- `description` — project name
- `timestamp` — ISO date of last activity

The dashboard renders these in a card grid with live search filtering.

## Tech Stack

- React 18
- Vite
- CSS Grid for layout
- Fetch API for data access

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── components/
│   └── ProjectCard.jsx
├── pages/
│   ├── Dashboard.jsx
│   └── Settings.jsx
├── utils/
│   └── api.js
├── App.jsx
└── main.jsx
```

## Deployment

The dashboard is meant to run embedded within the Arc Studio workspace as a productivity tool. It accesses Arc Studio's internal endpoints directly — no additional auth setup needed since it runs in the authenticated context.