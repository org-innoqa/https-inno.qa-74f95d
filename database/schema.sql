CREATE TABLE IF NOT EXISTS inquiries (
  id bigint generated always as identity primary key,
  club_name text not null,
  contact_name text not null,
  contact_email text not null,
  region text not null,
  club_size text not null,
  needs text[] not null,
  timeline text not null,
  additional_info text,
  status text default 'New',
  created_at timestamptz default now()
);

-- Seed some realistic demo inquiries for B2B showcase
INSERT INTO inquiries (club_name, contact_name, contact_email, region, club_size, needs, timeline, additional_info, status)
VALUES 
('ADAC Regional Office', 'Dr. Hans Müller', 'h.mueller@adac.de', 'Europe', '1M+ Members', ARRAY['eCPD Platform', 'EV Charging Hub Integration'], 'Within 3 months', 'Interested in integrating the FIA eCPD standard for our roadside assistance training program.', 'In Review'),
('Saudi Automobile & Motorcycle Federation (SAMF)', 'Yousef Al-Harbi', 'y.harbi@samf.gov.sa', 'MENA', '10k - 100k Members', ARRAY['eCPD Platform', 'Digital Licensing', 'Custom Club App'], 'Within 6 months', 'Looking to digitalize marshal training and licensing for upcoming international motorsport events in Riyadh.', 'New'),
('Emirates Motorsports Organization (EMSO)', 'Amna Al-Qubaisi', 'amna@emso.ae', 'MENA', '10k - 100k Members', ARRAY['eCPD Platform', 'Smart Membership'], 'Immediate', 'Urgent requirement to upgrade our volunteer training platform to meet the new FIA digital standards.', 'Contacted');