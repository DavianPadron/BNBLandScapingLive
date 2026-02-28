/*
  # Create quote requests table

  1. New Tables
    - `quote_requests`
      - `id` (uuid, primary key) - Unique identifier for each quote request
      - `name` (text) - Customer's full name
      - `address` (text) - Property address for the landscaping work
      - `phone` (text) - Customer's contact phone number
      - `job_description` (text) - Description of the landscaping work needed
      - `created_at` (timestamptz) - Timestamp when the request was submitted
      - `status` (text) - Status of the quote request (default: 'pending')
  
  2. Security
    - Enable RLS on `quote_requests` table
    - Add policy allowing public insertions (customers can submit quotes)
    - Add policy for authenticated admin users to view all requests
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  address text NOT NULL,
  phone text NOT NULL,
  job_description text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a quote request"
  ON quote_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all quote requests"
  ON quote_requests
  FOR SELECT
  TO authenticated
  USING (true);