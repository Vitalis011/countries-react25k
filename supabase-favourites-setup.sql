-- Simplified Supabase SQL Setup for Countries Favourites Feature
-- This version maintains compatibility with existing data while simplifying the setup

-- 1. Create favourites table (if not exists)
CREATE TABLE IF NOT EXISTS favourites (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  country_name TEXT NOT NULL,
  country_data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Ensure one favourite per user per country
  UNIQUE(user_id, country_name)
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE favourites ENABLE ROW LEVEL SECURITY;

-- 3. Drop existing policies to avoid conflicts (safe to run multiple times)
DROP POLICY IF EXISTS "Users can view own favourites" ON favourites;
DROP POLICY IF EXISTS "Users can insert own favourites" ON favourites;
DROP POLICY IF EXISTS "Users can update own favourites" ON favourites;
DROP POLICY IF EXISTS "Users can delete own favourites" ON favourites;
DROP POLICY IF EXISTS "Users can manage own favourites" ON favourites;

-- 4. Create single simplified policy for all operations
CREATE POLICY "Users can manage own favourites" ON favourites
  FOR ALL USING (auth.uid() = user_id);

-- 5. Create basic index for performance (optional but recommended)
CREATE INDEX IF NOT EXISTS favourites_user_id_idx ON favourites(user_id);
