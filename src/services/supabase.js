import { createClient } from "@supabase/supabase-js";

const supabaseUrl = `https://wmrohfbcaiqigxedibbd.supabase.co`;
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indtcm9oZmJjYWlxaWd4ZWRpYmJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzNzM0MzMsImV4cCI6MjAxNDk0OTQzM30.2hEiv2TcMdrUYl2Opcnxiw2fLobGb2Gc6ehP_ISmeIw`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
