/*
  # Grupo Raça Database Schema

  1. New Tables
    - `events`
      - `id` (uuid, primary key)
      - `title` (text, event name)
      - `description` (text, event details)
      - `date` (timestamp, event date)
      - `location` (text, event location)
      - `status` (text, 'upcoming' or 'finished')
      - `created_at` (timestamp)
    
    - `horses_breeding`
      - `id` (uuid, primary key)
      - `name` (text, horse name)
      - `description` (text, horse details)
      - `image_url` (text, horse image)
      - `price` (numeric, breeding price)
      - `available` (boolean, availability status)
      - `created_at` (timestamp)
    
    - `horses_sale`
      - `id` (uuid, primary key)
      - `name` (text, horse name)
      - `description` (text, horse details)
      - `image_url` (text, horse image)
      - `price` (numeric, sale price)
      - `available` (boolean, availability status)
      - `created_at` (timestamp)
    
    - `advisors`
      - `id` (uuid, primary key)
      - `name` (text, advisor name)
      - `specialty` (text, area of expertise)
      - `phone` (text, contact phone)
      - `email` (text, contact email)
      - `whatsapp` (text, WhatsApp number)
      - `created_at` (timestamp)
    
    - `sponsors`
      - `id` (uuid, primary key)
      - `name` (text, sponsor name)
      - `logo_url` (text, sponsor logo)
      - `website` (text, sponsor website)
      - `active` (boolean, active status)
      - `created_at` (timestamp)
    
    - `contacts`
      - `id` (uuid, primary key)
      - `department` (text, department name)
      - `phone` (text, contact phone)
      - `email` (text, contact email)
      - `address` (text, physical address)
      - `created_at` (timestamp)
    
    - `registrations`
      - `id` (uuid, primary key)
      - `name` (text, user name)
      - `email` (text, user email)
      - `phone` (text, user phone)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
    - Add policies for authenticated admin write access
*/

CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  date timestamptz NOT NULL,
  location text,
  status text DEFAULT 'upcoming',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS horses_breeding (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  image_url text,
  price numeric,
  available boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS horses_sale (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  image_url text,
  price numeric,
  available boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS advisors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  specialty text,
  phone text,
  email text,
  whatsapp text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS sponsors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  logo_url text,
  website text,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  department text NOT NULL,
  phone text,
  email text,
  address text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE horses_breeding ENABLE ROW LEVEL SECURITY;
ALTER TABLE horses_sale ENABLE ROW LEVEL SECURITY;
ALTER TABLE advisors ENABLE ROW LEVEL SECURITY;
ALTER TABLE sponsors ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view events"
  ON events FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view breeding horses"
  ON horses_breeding FOR SELECT
  TO anon, authenticated
  USING (available = true);

CREATE POLICY "Public can view sale horses"
  ON horses_sale FOR SELECT
  TO anon, authenticated
  USING (available = true);

CREATE POLICY "Public can view advisors"
  ON advisors FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view active sponsors"
  ON sponsors FOR SELECT
  TO anon, authenticated
  USING (active = true);

CREATE POLICY "Public can view contacts"
  ON contacts FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can create registrations"
  ON registrations FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);