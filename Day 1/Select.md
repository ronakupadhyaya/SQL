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

Using pgweb, we can see all of the information in the table.

![Table contents](./table_info.png)

But we really need to learn how to access this data programmically.

## The SELECT Statement

The SELECT statement is probably the most used tool in the SQL toolbox. As you saw above, it has a rich set of
options and mastering these can make you a very valuable member of a development team. You can also write queries
that take forever to run, so writing efficient queries is also very important. We're not going to worry about
efficiency just yet however.

A SELECT query always returns a table. Even if there is only one field and one line, the structure that is returned
is a table. Let's start with a basic query to get the information from the table.

```SELECT * FROM users;```

![Select 1](./select1.png)
