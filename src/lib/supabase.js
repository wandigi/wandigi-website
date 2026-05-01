import { createClient } from '@supabase/supabase-js';

// Menarik kredensial rahasia dari mesin GitHub Codespaces / Environment Variables
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

// Menyalakan mesin klien Supabase
export const supabase = createClient(supabaseUrl, supabaseKey);