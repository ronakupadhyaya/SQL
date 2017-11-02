# Setting up Postgres, creating tables & databases

1. Setup Postgres on your laptop
    1. [Mac Installation Instructions](setup_mac.md)
    1. [Windows Installation Instructions](setup_win.md)
1. [Watch: SQL, Creating Tables](https://vimeo.com/240908647)

## Exercises

1. Create a database named `setup` with `psql`
1. Connect to the `setup` database using `pgweb` or `psql`
1. Create a table named `cities` with the following columns

    | Column name | Type | Not Null |
    | :------------- | :------------- |
    | name | varchar | Y |
    | population | int | Y |
    | country | varchar | N |
    | capital | boolean | N |

1. Verify that the table `cities` exists and contains the right columns
1. Create a second table named `countries` with the following columns

    | Column name | Type | Not Null |
    | :------------- | :------------- |
    | name | varchar | Y |
    | population | int | Y |
    | continent | varchar | N |

1. Use `pgweb` or `psql` that the `countries` table exists and contains the
right columns
1. Verify that the table `countries` exists and contains the right columns
1. Alter the `countries` table and modify `continent` to be `NOT NULL`
1. Verify that the table `countries` has been updated
1. Drop the `cities` and `countries` tables
1. Drop the `setup` database

# Done

You're done with this module! TODO link to next module
