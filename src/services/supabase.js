import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://astlpgicqzjsbhynexfd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzdGxwZ2ljcXpqc2JoeW5leGZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEzMjg3OTgsImV4cCI6MjAzNjkwNDc5OH0.bOsZosA8In8cqtNAPQfhRBxImO1rJrzcxbz-bdgsEM0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
