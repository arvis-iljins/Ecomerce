CREATE TABLE IF NOT EXISTS public."User" (
    "UserId"     UUID         PRIMARY KEY,
    "Email"      VARCHAR(255) NOT NULL,
    "Password"   VARCHAR(255) NOT NULL,
    "PersonName" VARCHAR(255) NOT NULL,
    "Gender"     VARCHAR(50)  NOT NULL
);

INSERT INTO public."User" ("UserId", "Email", "Password", "PersonName", "Gender") VALUES
    ('c32f8b42-60e6-4c02-90a7-9143ab37189f', 'alice@example.com',   'pass1234', 'Alice Johnson',  'Female'),
    ('8ff22c7d-18c7-4ef0-a0ac-988ecb2ac7f5', 'bob@example.com',     'pass1234', 'Bob Smith',      'Male'),
    ('a1b2c3d4-0001-4000-8000-000000000003', 'carol@example.com',   'pass1234', 'Carol White',    'Female'),
    ('a1b2c3d4-0001-4000-8000-000000000004', 'david@example.com',   'pass1234', 'David Brown',    'Male'),
    ('a1b2c3d4-0001-4000-8000-000000000005', 'emma@example.com',    'pass1234', 'Emma Davis',     'Female'),
    ('a1b2c3d4-0001-4000-8000-000000000006', 'frank@example.com',   'pass1234', 'Frank Miller',   'Male'),
    ('a1b2c3d4-0001-4000-8000-000000000007', 'grace@example.com',   'pass1234', 'Grace Wilson',   'Female'),
    ('a1b2c3d4-0001-4000-8000-000000000008', 'henry@example.com',   'pass1234', 'Henry Moore',    'Male'),
    ('a1b2c3d4-0001-4000-8000-000000000009', 'isla@example.com',    'pass1234', 'Isla Taylor',    'Female'),
    ('a1b2c3d4-0001-4000-8000-000000000010', 'jack@example.com',    'pass1234', 'Jack Anderson',  'Male')
ON CONFLICT DO NOTHING;
