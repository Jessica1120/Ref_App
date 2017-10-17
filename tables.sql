CREATE TABLE "users" (
"id" serial primary key,
"username" varchar (80) not null UNIQUE,
"password" varchar(240) not null
);


CREATE TABLE "profiles" (
"id" serial primary key,
"name" varchar not null,
"league" varchar (100) not null,
"city_state" varchar not null,
"games_history" varchar(200) not null,
"email" varchar (40) not null,
"bio" text, 
"certifications" text,
"user_id" int REFERENCES users (id) ON DELETE CASCADE);

CREATE TABLE "games" (
"date" date,
"location" varchar (50) not null,
"team1" varchar (50) not null,
"team2" varchar (50) not null,
"headref" int REFERENCES profiles (id) ON DELETE CASCADE,
"ipr" int REFERENCES profiles (id) ON DELETE CASCADE,
"jr1" int REFERENCES profiles (id) ON DELETE CASCADE,
"jr2" int REFERENCES profiles (id) ON DELETE CASCADE,
"opr1" int REFERENCES profiles (id) ON DELETE CASCADE,
"opr2" int REFERENCES profiles (id) ON DELETE CASCADE,
"opr3" int REFERENCES profiles (id) ON DELETE CASCADE);