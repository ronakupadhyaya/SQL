# Use Google BigQuery to query large datasets

The SQL language is supported by many tools. In particular, Google has a tool
called BigQuery that allows you to run SQL queries against very, very large
datasets.

We're going to be playing with a database of names given to babies between the
years 1910 and 2013 in the US.
[Check out the schema on Google BigTable](https://bigquery.cloud.google.com/table/bigquery-public-data:usa_names.usa_1910_2013?pli=1).

This table contains over 5 million records.
Click `Preview` to check out the contents of the table.
For example the following row means there were 5 boys born in Alaska with the
name `Edward` in 1910:

| state | gender | year | name | number |
| ----- | ------ | ---- | ---- | ------ |
| AK    | M | 1910 | Edward | 5 |

Click the `Query Table` button and write the following queries using
[BigQuery's dialect of SQL.](https://cloud.google.com/bigquery/docs/reference/legacy-sql)
Note the while BigQuery SQL is mostly the same as SQL for Postgres there
are some differences so experiment with variation.

## Exercises

Find the answer to these questions
[using the US name dataset from Google BigTable](https://bigquery.cloud.google.com/table/bigquery-public-data:usa_names.usa_1910_2013?pli=1).

1. Find the total number of boys and the total number of girls in the whole
dataset.
1. Find out how many girls were born in Oregon in 1949.
1. Find the 10 most popular names in the whole dataset.
1. Find the 10 most popular male names in the whole dataset.
1. Find the 10 most popular female names in the whole dataset.
1. Find the name year when `Ruth` was at the height of its popularity
(i.e. the year when most `Ruth`s are born)
1. Find the 10 states with the largest number of boys born in 1955.

## Complete the [SQL Zoo: Join](https://sqlzoo.net/wiki/The_JOIN_operation)

## Double bonus: window functions

You will need to use a subquery (i.e. select within select) and window functions
to answer this one.

Read about [window functions](https://community.modeanalytics.com/sql/tutorial/sql-window-functions/).
[BigQuery docs on window functions.](https://cloud.google.com/bigquery/docs/reference/legacy-sql#windowfunctions)

Find the top 10 female names that experienced the greatest increase in popularity
in Florida between between 2009 and 2010.

Use absolute increase in population as a measure of popularity.

<details><summary>
Answer
</summary><p>

| name |
| --- |
| Isabella |
| Sophia |
| Olivia |
| Emma |
| Emily |
| Mia |
| Ava |
| Madison |
| Abigail |
| Chloe |

</p></details>

<details><summary>
Solution
</summary><p>

```sql
SELECT
    name,
    number - prev_year as change
    FROM (
        SELECT name as name,
        number,
        LAG(number) OVER(ORDER BY year) prev_year,
        FROM [bigquery-public-data:usa_names.usa_1910_current]
        WHERE year = 2010 AND gender = 'F' AND state = 'FL'
    )
    ORDER BY change DESC
    LIMIT 10
```

</p></details>
