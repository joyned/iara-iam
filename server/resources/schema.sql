CREATE SCHEMA IF NOT EXISTS iam;

create table if not exists iam."user" (
	id uuid,
	email varchar,
	full_name varchar,
	picture text,
	password varchar,
	is_blocked bool default false,	
	constraint user_pk primary key (id)
);

MERGE INTO iam."user" (id, email, full_name, picture, password, is_blocked) VALUES
('11111111-1111-1111-1111-111111111111', 'clark.kent@dailyplanet.com', 'Clark Kent', 'https://example.com/avatars/superman.jpg', '$2a$10$encrypted_password_hash_superman', false);
