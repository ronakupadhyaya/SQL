# Introduction to SELECT

## Overview

SELECT is the basic tool to get data from a SQL database. The full syntax of SELECT is:

![Full SELECT Syntax](./select_syntax.png)

Fortunately, we'll only be starting with a subset of this. In particular, we're going to use this part:

![Full SELECT Syntax](./select_syntax_brief.png)

## Setup

The first thing is to create a database and some data that we can play with. Run the provided
migration script to create the database 'testdb' and populate it with a 'users' table. (If you already
have a testdb database either drop it or rename the database in the script.) From psql you can run the command

```\i <path to script>```
