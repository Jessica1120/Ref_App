CREATE TABLE "users" (
"id" serial primary key,
"username" varchar (80) not null UNIQUE,
"password" varchar(240) not null);

CREATE TABLE "profiles" (
"id" serial primary key,
"derbyname" varchar,
"league" varchar (100),
"city_state" varchar,
"games_history" varchar(200),
"email" varchar (40),
"bio" text, 
"certifications" text,
"user_id" int REFERENCES users (id) ON DELETE CASCADE);


CREATE TABLE "games" (
"date" date,
"location" varchar (50) not null,
"team1" varchar (50) not null,
"team2" varchar (50) not null,
"headref" int REFERENCES profiles (id) ON DELETE CASCADE,
"ipr" int REFERENCES profiles(id) ON DELETE CASCADE,
"jr1" int REFERENCES profiles (id) ON DELETE CASCADE,
"jr2" int REFERENCES profiles (id) ON DELETE CASCADE,
"opr1" int REFERENCES profiles (id) ON DELETE CASCADE,
"opr2" int REFERENCES profiles (id) ON DELETE CASCADE,
"opr3" int REFERENCES profiles (id) ON DELETE CASCADE);
