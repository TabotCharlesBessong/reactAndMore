import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://tjupbpprrxvcolycoamd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqdXBicHBycnh2Y29seWNvYW1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcyMTc5MzUsImV4cCI6MjAxMjc5MzkzNX0.vg-1hwe0XjlrcEmDYSkSA0I131I7gHbhSDXDupj11I4"
);
