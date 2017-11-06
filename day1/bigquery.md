# Use Google BigQuery to query large datasets

The SQL language is supported by many tools. In particular, Google has a tool
called BigQuery that allows you to run SQL queries against very, very large
datasets.

We're going to be playing a database of names given to babies between the years
1910 and 2013 in the US.
[Check out the schema on Google BigTable](https://bigquery.cloud.google.com/table/bigquery-public-data:usa_names.usa_1910_2013?pli=1).

This table contains over 5 million records.
Click `Preview` to check out the contents of the table.
For example the following row means there were 5 boys born in Alaska with the
name `Edward` in 1910:

| state | gender | year | name | number |
| ----- | ------ | ---- | ---- | ------ |
| AK    | M | 1910 | Edward | 5 |

Click the `Query Table` button and write the following queries using
[BigQuery's dialect of SQL](https://cloud.google.com/bigquery/docs/reference/legacy-sql)

## Exercises

1. Find the total number of boys and the total number of girls in the whole
dataset.
1. Find out how many girls were born in Oregon in 1949.
1. Find the 10 most popular names in the whole dataset.
1. Find the 10 most popular male names in the whole dataset.
1. Find the 10 most popular female names in the whole dataset.
1. Find the year when `Ruth` was at the height of its popularity
(i.e. the year when most `Ruth`s are born)
1. Find the 10 states with the largest number of boys born in 1955.

## Double bonus

You will need to use subqueries and
[window functions](https://cloud.google.com/bigquery/docs/reference/legacy-sql#windowfunctions)
to answer these.

1. Find the female name that experienced the greatest increase in popularity
in Florida between between 1989 and 1990.

    Use absolute increase in population as a measure of popularity.

    <details><summary>
    Answer
    </summary><p>

    Ashley

    </p></details>

1. Find the female name that experienced the greatest increase in popularity
nationally between between 1989 and 1990.

    <details><summary>
    Answer
    </summary><p>

    Jessica

    </p></details>

    <details><summary>
    Solution
    </summary><p>

    ```sql
    SELECT
        name,
        SUM(number) - SUM(prev_year) as change
        FROM (
            SELECT name as name,
            number,
            LAG(number) OVER(ORDER BY year) prev_year,
            FROM [bigquery-public-data:usa_names.usa_1910_current]
            WHERE year = 1990 AND gender = 'F'
        )
        GROUP BY name
        ORDER BY change DESC
    ```

    </p></details>
