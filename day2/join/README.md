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

1. Write a query to get the first names of all customers who don't have a membership type
(i.e. membership type is null).

    <details><summary>
    Result
    </summary><p>

    | name_first |
    | ---- |
    | Bam bam |

    </p></details>

1. Write a query to get the first names and activity levels of all customers who don't have a
membership type (i.e. membership type is null).

    <details><summary>
    Result
    </summary><p>

    | name_first |   level|
    |------------|-----------|
    | Bam bam    | Strenuous|

    </p></details>

1. Write a query to count the number of customers in each activity level:

    <details><summary>
    Screenshot
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

1. TODO 3 more
