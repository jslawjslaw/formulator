# Schema Information

## users
column name     | data type | details
----------------|-----------|--------------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique


## forms
column name	| data type | details
----------------|-----------|--------------------------
id		| integer   | not null, primary key
title		| string    | not null
description	| string    | not null
author_id	| integer   | not null, foreign key
permanent_link	| string    | not null, unique
title_link	| string    | not null, unique
private		| boolean   | not null, default=false


## fields
column name	| data type | details
----------------|-----------|--------------------------
id		| integer   | not null, primary key
type		| string    | not null
label		| string    | not null
user_instruction| string    |
form_id		| integer   | not null, indexed


## entries
column name	| data type | details
----------------|-----------|--------------------------
id		| integer   | not null, primary key
submission_id	| integer   | not null, foreign key
field_id	| integer   | not null, foreign key 
value		| string    |


## submissions
column name	| data type | details
----------------|-----------|--------------------------
id		| integer   | not null, primary key
form_id		| integer   | not null, foreign key
