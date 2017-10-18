# Introduction to SELECT

## Overview

SELECT is the basic tool to read data from a SQL database. The full syntax of SELECT is:

![Full SELECT Syntax](./select_syntax.png)

Fortunately, we'll be starting with a subset of this. In particular, we're going to look at the
following clauses of the SELECT statement:
* LIMIT
* ORDER BY
* WHERE
* GROUP BY

## Setup

The first thing is to create a database and some data that we can play with. Run the provided
migration script to create the database 'testdb' and populate it with a 'users' table. (If you already
have a testdb database either drop it or rename the database in the script.) From psql you can run the command

```\i <path to script>```

Using pgweb, we can see all of the information in the table. Make sure to click on the table name and then
rows in pgweb.

![Table contents](./table_info.png)

But we really need to learn how to access this data programmaticly.

## The SELECT Statement

The SELECT statement is probably the most used tool in the SQL toolbox. As you saw above, it has a rich set of
options and mastering these can make you a very valuable member of a development team. You can also write queries
that take forever to run, so writing efficient queries is also very important. We're not going to worry about
efficiency just yet however.

A SELECT query always returns a table. Even if there is only one field and one record, the structure that is returned
is a table. Let's start with a basic query to get the information from the table.

```SQL
SELECT * FROM users;
```

![Select 1](./select1.png)

<details><summary>
	Displaying NULL as NULL
</summary><p>

Aside: You'll notice that I have a 'NULL' where there's a NULL in the data. You can do that by running the command

```
\pset null NULL
```

in psql. Normally psql displays NULL as a blank area which can be confusing.

</p></details>

One important point is that the order in which you receive the rows is random-ish. There's no guarantee of a particular
order unless you specify it. (It's not truly random. The server has an algorithm that it uses to retrieve and format the
data. But it might not be the order that we expected and it might be a different order tomorrow depending on what happened
overnight or what's happening now. For instance, the row with id 16 was originally between ids 15 and 17. But I modified
that row and it went to the bottom of the list in the next query.)

So let's dissect the SELECT statement that I used.

```SQL
SELECT * FROM users;
```

* SELECT - the keyword that tells the server that we're doing a SELECT statement. (But I bet you'd already figured that out.)
* \* - Get all of the fields for the relevant table.
* FROM - Another keyword that tells the command parser that the table name is next.
* users - The name of the table that we're pulling the information from.
* ; - Because we never forget the semicolon.

Instead of '\*', we could have listed the fields that we are interested in. And they don't have to be in the original order.

```SQL
SELECT age, name FROM users;
```

![Select 2](./select2.png)

You'll notice that you can list multiple fields with a comma separator.

### Exercises

1. Write and execute a query that displays the name and city of each person in the table.
2. Write and execute a query that displays the states followed by the zipcode of each person in the table.

## The LIMIT Clause

While showing the 20 records of the table in our database isn't too bad, most production databases have tables
that have hundreds/thousands/millions of entries. So we need a way to limit the number of records in the output.
PostgreSQL has a LIMIT clause that allows us to do this. So if we wanted to just show the top 5 records of the table,
we'd do this:

```SQL
SELECT name, age FROM users LIMIT 5;
```

![Select 5](./select5.png)

One problem with this is that there's no discrimination on which records we get. This query just returned the \"first\"
5 records, but it was up to the server to determine which records those were. We'll see ways to help that in a minute.

NOTE: While most (all?) other products also have this functionality, it seems to be different in each one. For instance:
* Microsoft SQL Server uses TOP<br>
```SELECT TOP 5 age FROM users;```

* Oracle SQL uses ROWNUM<br>
```SELECT age FROM users WHERE ROWNUM <= 5;``` (We'll see WHERE in just a minute.)

### Exercises

1. Write and execute a query that displays 10 records of the user table.
2. Write and execute a query that displays 30 records of the user table. (Notice that this still works, but it only shows the 20
records that are actually in the table.)

## The ORDER BY Clause

As we said before, the records will come out in a random order from the SELECT statement, but we can control the order with the
```ORDER BY``` clause. For example

```SQL
SELECT age FROM users ORDER BY age;
```

![Select 3](./select3.png)

This will sort the output by the specified field. You can also sort in descending order using this command.

```SQL
SELECT age FROM users ORDER BY age DESC;
```

ASC is used for ascending if you need to specify that but ascending is typically the default.

You'll notice that the NULLs came out at the bottom. NULLs are a special case in SQL. Unlike in many programming
languages where a NULL is equivalent to zero, in SQL NULLs are their own entity. You can't compare a NULL to a
number or a string. And you can specify where you want the NULLs to appear in a sorted order.

```SQL
SELECT age FROM users ORDER BY age NULLS FIRST LIMIT 5;
```

![Select 4](./select4.png)

We can also have more than one field in the order by clause. For instance:

```SQL
SELECT city, state FROM users ORDER BY state desc, city;
```

![Select 27](./select27.png)

Note that he various clauses must be in the proper order. See the big syntax diagram at the beginning for that order.
We can also put the NULLs last using ```NULLS LAST``` but that is also the default for an ascending list.

### Exercises

1. Write and execute a query that displays the name and age of each person sorted by age, then name. Your output should look like this:

![Select 6](./select6.png)

2. Write and execute a query that displays the name and age of the 5 youngest people in the table. Your output should look like this:

![Select 7](./select7.png)

3. Write and execute a query that displays the name and age of the 6 youngest people in the table. Your output should look like this:

![Select 8](./select8.png)

4. Did your last query correctly reflect all of the people in the list that should have been displayed? There are 3 people that are 28.

This leads to....

## The WHERE Clause

The WHERE clause allows us to filter the records on certain criteria. Let's look at that last exercise.

3. Write and execute a query that displays the name and age of the 6 youngest people in the table.

There were 3 entries with an age of 28. It's basically random which of the entries made it onto our list of 5.
But there's another way to constrain the data. Let's look at an example.

```SQL
SELECT name, age FROM users WHERE age < 30 order by age;
```

![Select 9](./select9.png)

The new part, of course, is the WHERE clause. This allows us to filter the records on particular constraints. In this case
we read all records for people under the age of 30. You can also filter for strings. In SQL we use single quotes (\'CA\')
to delimit strings. This is different than most programming languages that use double quotes (\"CA\"). Please also notice
that the equals comparison is just a single equals sign (state = 'CA') versus the double equals sign that most programming
languages use.

```SQL
SELECT name, age, state FROM users WHERE state = 'CA';
```

![Select 10](./select10.png)

This query reads all records whose state field is equal to 'CA'. And of course we can combine constraints in the usual way.
I'm going to start writing longer queries on multiple lines to make them easier to read.

```SQL
SELECT
	name,
	age, 
	state
FROM
	users
WHERE
	age < 30
	AND state = 'CA';
```

![Select 11](./select11.png)

You can also use ```NOT``` to change the constraint.

```SQL
SELECT
	name,
	age, 
	state
FROM
	users
WHERE
	age < 30
	AND NOT state = 'CA';
```

![Select 12](./select12.png)

There are 3 other types of boolean expressions that you need to know about for the WHERE clause. The first
is ```LIKE``` which permits us to create wildcard expressions. The \'%\' is the wildcard character. This query
fetches all records where the first character in the state field is \'C\'.

```SQL
SELECT
	name,
	age, 
	state
FROM
	users
WHERE
	state LIKE 'C%';
```

![Select 13](./select13.png)

Note that while the SQL language isn't case sensitive, the data in the fields **IS** case sensitive so this query
has a different result.

```SQL
SELECT
	name,
	age, 
	state
FROM
	users
WHERE
	state LIKE 'c%';
```

![Select 14](./select14.png)

<details><summary>
	ILIKE in PostgreSQL
</summary><p>

PostgreSQL actually **DOES** have ```ILIKE``` which is case-insensitive but I don't know of an equivalent in any of the other implementations.

</p></details>

The next is ```BETWEEN```. This allows you to create an expression that tests for values between upper and lower bounds.
Note that BETWEEN is between inclusively.

```SQL
SELECT
	name,
	age, 
	state
FROM
	users
WHERE
	age BETWEEN 20 AND 45;
```

![Select 15](./select15.png)

And last is an expression that checks for NULLs.

```SQL
SELECT
	name,
	age, 
	state
FROM
	users
WHERE
	age IS NULL;
```

![Select 16](./select16.png)

Or check for the absence of NULLs.

```SQL
SELECT
	name,
	age, 
	state
FROM
	users
WHERE
	age IS NOT NULL;
```

![Select 17](./select17.png)

Once again notice that NULL is really a different beast than it is in most programming languages. See the output of this query:

```SQL
SELECT
	name,
	age, 
	state
FROM
	users
WHERE
	age = NULL;
```

![Select 28](./select28.png)

You just can't compare NULL to data fields in the normal programming language way.

### Exercises

1. Write and execute a query that will find all records where the age of the person is between 20 and 30 and the person
lives in a city that starts with 'S'. Your output should look like this:

![Select 18](./select18.png)

<details><summary>
	Solution
</summary><p>

```SQL
SELECT
	*
FROM
	users
WHERE
	age BETWEEN 20 AND 30
	AND city LIKE 'S%';
```

</p></details>

2. Write and execute a query that will find the name and state of all records that have a NULL age. Order
your output by state. Your output should look like this:

![Select 19](./select19.png)

<details><summary>
	Solution
</summary><p>

```SQL
SELECT
	name,
	state
FROM
	users
WHERE
	age IS NULL
ORDER BY
	state;
```

</p></details>

3. Write and execute a query that will find all records where the person lives in Colorado (CO) and whose name isn't Kevin.
Your output should look like this:

![Select 20](./select20.png)

<details><summary>
	Solution
</summary><p>

```SQL
SELECT
	*
FROM
	users
WHERE
	state = 'CO'
	AND NOT name = 'Kevin;
```

**OR**

```SQL
SELECT
	*
FROM
	users
WHERE
	state = 'CO'
	AND name <> 'Kevin;
```

</p></details>

## The GROUP BY Clause

The last part of SELECT that we're going to look at now is the ```GROUP BY``` clause. This will just be an
introduction to aggregates as this is a much more complicated topic that we'll explore more thoroughly later.
The ```GROUP BY``` clause allows you to group records by one or more fields. For instance if you wanted to
look at all of the people that live in Colorado. But this is **ONLY** when you are aggregating data. So I wouldn't
use ```GROUP BY``` to just grab the records where state = 'CO'. We still use the WHERE clause for that. Let's look
at an example.

```SQL
SELECT
	state,
	COUNT(1)
FROM
	users
GROUP BY
	state
ORDER BY
	state;
```

![Select 21](./select21.png)

This query took all of the records and group them by state. For each of the records in each state, it increased
the count by one (the COUNT(1) part), this giving a count of the number of records in each state. (Note: COUNT(\*)
is used interchangeably with COUNT(1).) I could use state in this query because we were grouping by state so there
was only one state associated with each count. Here's another example.

```SQL
SELECT
	state,
	MAX(age)
FROM
	users
GROUP BY
	state
ORDER BY
	state;
```

![Select 22](./select22.png)

This query lists the max age of the people in each state. Notice that the max age for the person in NY is 'NULL'. Why
is that?
<details><summary>
	Answer
</summary><p>
That's the **ONLY** record in NY.
</p></details>

Unfortunately, we can't just add the name of the oldest person into the query. Aggregates are a little more complicated
than that and we'll get to that later.

Other functions (like COUNT() and MAX()) that you can use are MIN(), SUM(), and AVG().

### Exercises

1. Write and execute a query that displays the average age of the people in each state. (What are you going to
do about those NULLs?) Your output should look like this:

![Select 23](./select23.png)

<details><summary>
	Solution
</summary><p>

```SQL
SELECT
	state,
	AVG(age)
FROM
	users
WHERE
	age IS NOT NULL
GROUP BY
	state
ORDER BY
	state;
```

</p></details>

2. Write and execute a query that displays the number of people in each city/state combination. (Hint: GROUP BY both city and state.) Your output should look like this:

![Select 24](./select24.png)

<details><summary>
	Solution
</summary><p>

```SQL
SELECT
	city,
	state,
	COUNT(1)
FROM
	users
GROUP BY
	city,
	state
ORDER BY
	state,
	city;
```

</p></details>

## Column Aliasing

There's one last item that needs to be mentioned. You can change the name of a column when the query returns. For instance:

```SQL
SELECT
	name as customer,
	state place
FROM
	users;
```

![Select 25](./select25.png)

The ```AS``` is optional. One more example:

```SQL
SELECT
	state AS State,
	SUM(age)/COUNT(1) AS "Average Age"
FROM
	users
WHERE
	age IS NOT NULL
GROUP BY
	state
ORDER BY
	state;
```

![Select 26](./select26.png)

You can use double quotes when you wish to capitalize something in the alias or have a space in the column name.
Also you see that you can also do calculations in the SELECT statement.

One good reason for aliasing columns is if you wish to hide the actual column names for security reasons.
