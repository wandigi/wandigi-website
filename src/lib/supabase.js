import { createClient } from '@supabase/supabase-js';

// 1. Ketik URL secara langsung (Pasti bersih dari spasi/enter tersembunyi)
const supabaseUrl = 'https://ywdmdcaqhgifkordrheh.supabase.co';

// 2. Masukkan Anon Key Anda di sini
// CATATAN PENTING: Kunci Anon Supabase yang valid SELALU dimulai dengan huruf "eyJ..." dan sangat panjang.
// Jika kunci Anda berbunyi "sb_publishable_...", itu BUKAN Anon Key yang benar.
const supabaseKey = 'sb_publishable_bczi-EOmfIRy1aPAzPvMOQ_HJNhqFBd'; 

export const supabase = createClient(supabaseUrl, supabaseKey);