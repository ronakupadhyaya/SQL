# Setting up Postgres, creating tables & databases

1. Setup Postgres on your laptop
    1. [Mac Installation Instructions](setup_mac.md)
    1. [Windows Installation Instructions](setup_win.md)
1. [Watch: SQL, Creating Tables](https://vimeo.com/240908647)

## Exercises

1. Connect to your database with `pgweb`, use the `SQL Query` tab to create
a database named `setup` using the `CREATE DATABASE` command
1. Click `Connect` on the upper right now connect to the `setup` database
by filling **Database** field (fill the other fields as you did before).

    <details><summary>
    Troubleshooting pgweb
    </summary><p>

    Set **SSL Mode** to **false** and **Database** to **setup**.

    </p></details>
1. Create a table named `cities` with the following columns

    | Column name | Type | Not Null |
    | :-- | :-- | :-- |
    | name | varchar | Y |
    | population | int | Y |
    | country | varchar | N |
    | capital | boolean | N |

1. Verify that the table `cities` exists and contains the right columns
1. Create a second table named `countries` with the following columns

    | Column name | Type | Not Null |
    | :-- | :-- | :-- |
    | name | varchar | Y |
    | population | int | Y |
    | continent | varchar | N |

1. Use `pgweb` or `psql` to verify that the `countries` table exists and contains the
right columns
1. Verify that the table `countries` exists and contains the right columns
1. Alter the `countries` table and modify `continent` to be `NOT NULL`
1. Verify that the table `countries` has been updated
1. Drop the `cities` and `countries` tables
1. Drop the `setup` database using `psql`

    If you're using `pgweb`, make sure you disconnect first.

    On Windows, you can open `SQL Shell (psql)` from the start menu.

    On a Mac, you can open psql from `Postgres` in your applications by
    double-clicking on the `Postgres` database.
