# Database/Schema Migration

## Overview

Consider the following circumstance. You are working on a project that requires a database and you decide
to collaborate with a partner. You have both already created databases and populated them with tables and
data, but now need to merge the two databases into one. Moving the schema and data from one database to
the other is known as **database or schema migration**. Another example might be if two businesses merge
(or one acquires another) and there is a need to merge the corporate databases.

## Setup

We'll be using the db-migrate service provided by Node.js. You already have Node installed so we just need
to install the appropriate packages. First install the db-migrate package.

```npm install -g db-migrate```

And then install the PostgreSQL driver for db-migrate.

```npm install -g db-migrate-pg```

