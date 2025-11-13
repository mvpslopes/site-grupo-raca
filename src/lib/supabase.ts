import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  status: 'upcoming' | 'finished';
  created_at: string;
}

export interface HorseBreeding {
  id: string;
  name: string;
  description: string;
  image_url: string;
  price: number;
  available: boolean;
  created_at: string;
}

export interface HorseSale {
  id: string;
  name: string;
  description: string;
  image_url: string;
  price: number;
  available: boolean;
  created_at: string;
}

export interface Advisor {
  id: string;
  name: string;
  specialty: string;
  phone: string;
  email: string;
  whatsapp: string;
  created_at: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logo_url: string;
  website: string;
  active: boolean;
  created_at: string;
}

export interface Contact {
  id: string;
  department: string;
  phone: string;
  email: string;
  address: string;
  created_at: string;
}

export interface Registration {
  name: string;
  email: string;
  phone: string;
}
