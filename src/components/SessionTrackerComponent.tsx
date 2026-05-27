"use client";

import { SessionTracker } from "@rodrigo-barraza/components-library";
import { PROJECT_NAME } from "@/config";

export default function SessionTrackerComponent() {
  return <SessionTracker projectName={PROJECT_NAME} />;
}
