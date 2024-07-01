import { createClient, SupabaseClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);
console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key:', supabaseKey);


export default supabase;
