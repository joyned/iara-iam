create schema if not exists iam;

create table if not exists iam."user" (
	id uuid primary key,
	email varchar not null,
	full_name varchar not null,
	password varchar not null,
	picture varchar,
	otp_key varchar,
	is_blocked bool default false
);

merge into iam."user" (id, email, full_name, password, picture, otp_key, is_blocked) values
(RANDOM_UUID(), 'luke.skywalker@rebeliao.com', 'Luke Skywalker', '$2a$10$N9qo8uLOickgx2ZMRZoMy.Mr5vYhC5yZ5J5a5J5a5J5a5J5a5J5a5', 'https://avatar.com/luke.jpg', 'JBSWY3DPEHPK3PXP', false);
