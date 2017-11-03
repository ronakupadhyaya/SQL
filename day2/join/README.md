# `JOIN`ing Tables

## Setup

1. Create a new database named `jointable`
1. Create and source an `env.sh` file

    <details><summary>
    env.sh on Mac
    </summary><p>

    ```sh
    export DATABASE_URL=postgresql://postgres@localhost/jointable
    ```

    </p></details>

    <details><summary>
    env.sh on Windows
    </summary><p>

    ```sh
    # Use the password you set during Postgres installation
    export DATABASE_URL=postgresql://postgres:YOUR POSTGRES PASSWORD HERE@localhost/pg_node
    ```

    </p></details>
1. Run `npm install` then run `db-migrate up`. The data you need for this
exercise should now be created.

## [Watch & Do Exercises: JOINing Tables](https://vimeo.com/241210458)

## Exercises

We recommend breaking down the task of writing queries. Start by writing a
`SELECT *` query that joins the tables that contain the data you need, then add
the `WHERE`, `ORDER BY` and `GROUP BY` clauses to get to the final result.

1. Write a query to get the first name of the customer who doesn't have a membership type
(i.e. membership type is null).

    <details><summary>
    Result
    </summary><p>

    | name_first |
    | ---- |
    | Bam bam |

    </p></details>

1. Write a query to get the first name and activity level of the customer who
doesn't have a membership type (i.e. membership type is null).

    <details><summary>
    Result
    </summary><p>

    | name_first |   level|
    |------------|-----------|
    | Bam bam    | Strenuous|

    </p></details>

1. Write a query to get the price of the most expensive product that `Fred`
has bought.

    <details><summary>
    Result
    </summary><p>

    | max |
    | --- |
    | 299 |

    </p></details>

    <details><summary>
    Hint
    </summary><p>

    Write a query to get all the products `Fred` has bought then use
    `MAX(price)` to find the row with the highest price.

    </p></details>

1. Write a query to count the number of customers for each activity level.

    <details><summary>
    Hint
    </summary><p>

    Join the `customers` table to the `activity_levels` table and use a
    `GROUP BY` clause to count the number of customers for each activity level.

    </p></details>

    <details><summary>
    Result
    </summary><p>

    | level | count |
    | -- | -- |
    | Regular | 2 |
    | Couch potato | 1 |
    | Strenuous | 2 |
    | Moderate | 1 |

    </p></details>

1. Write a query to get the first and last name of the customer who ordered
a `Magellen eXplorist GC`:

    <details><summary>
    Result
    </summary><p>

    | name_first | name_last  |
    |------------|------------|
    | Wilma      | Flintstone|

    </p></details>

1. **Bonus** Write a query to count how many family members in each family
(based on `name_last`) have each membership type

    <details><summary>
    Result
    </summary><p>

    | name_last  |   name   | count |
    |------------|----------|-------|
    | Flintstone | premium  |     2|
    | Rubble     | regular  |     1|
    | Flintstone | inactive |     1|
    | Rubble     | charter  |     1|

    </p></details>
