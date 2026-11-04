CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text,
  service text NOT NULL,
  project_description text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.contact_submissions TO service_role;

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
-- Rows are written only by server code with service credentials (the site's own
-- backend); no anon/authenticated policies on purpose, so visitors cannot read
-- or alter other people's requests.
