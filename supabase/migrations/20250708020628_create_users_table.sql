drop table if exists public.users;
create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text unique not null
);

insert into public.users (name, email) values
('Sandeep Kumar', 'sandeep@example.com'),
('Mr raj', 'raj@example.com');
