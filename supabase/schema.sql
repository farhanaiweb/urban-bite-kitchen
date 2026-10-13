-- Phase 5A: Reservations table for Urban Bite Kitchen
-- Run this in the Supabase SQL editor

CREATE TABLE public.reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 20),
  email text NOT NULL CHECK (char_length(email) BETWEEN 5 AND 254),
  reservation_date date NOT NULL,
  reservation_time time NOT NULL,
  guests smallint NOT NULL CHECK (guests BETWEEN 1 AND 12),
  special_requests text CHECK (special_requests IS NULL OR char_length(special_requests) <= 500),
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled'))
);

CREATE INDEX reservations_datetime_idx ON public.reservations (reservation_date, reservation_time);

ALTER TABLE public.reservations ENABLE ROW LEVEL SECURITY;

-- Phase 6: add admin read/update policy for authenticated admin only.
-- No public policies: server uses service-role key (bypasses RLS); anon users get no access.