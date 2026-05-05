import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.URL;
const supabaseKey = process.env.SERVICE_KEY;

if (!supabaseKey || !supabaseUrl) {
  throw new Error("Missing env variables");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
