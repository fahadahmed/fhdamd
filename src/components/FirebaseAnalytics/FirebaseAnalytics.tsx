'use client'
import { useEffect } from "react";
import { analytics } from "@/libs/firebase";

export default function FirebaseAnalytics() {
  useEffect(() => {
    analytics;
  }, []);

  return null;
}