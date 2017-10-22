CREATE TABLE "users" (
"id" serial primary key,
"username" varchar (80) not null UNIQUE,
"password" varchar(240) not null;
"derbyname" varchar,
"league" varchar (100),
"city" varchar (30),
"state" varchar (2),
"games_history" varchar(200),
"email" varchar (40),
"bio" text, 
"certifications" text);


CREATE TABLE "games" (
"id" serial primary key, 
"date" date not null,
"city" varchar (50) not null,
"state" varchar (2) not null,
"team1" varchar (50) not null,
"team2" varchar (50) not null,
"headref" int REFERENCES users (id) ON DELETE CASCADE,
"ipr" int REFERENCES users(id) ON DELETE CASCADE,
"jr1" int REFERENCES users (id) ON DELETE CASCADE,
"jr2" int REFERENCES users (id) ON DELETE CASCADE,
"opr1" int REFERENCES users (id) ON DELETE CASCADE,
"opr2" int REFERENCES users (id) ON DELETE CASCADE,
"opr3" int REFERENCES users (id) ON DELETE CASCADE);


UPDATE games SET 'postion' = ((SELECT (id) FROM users WHERE derbyname='$1') , $2);