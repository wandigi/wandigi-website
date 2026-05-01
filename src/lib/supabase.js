import { createClient } from '@supabase/supabase-js';

// Menyalakan mesin klien Supabase
export const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY
);