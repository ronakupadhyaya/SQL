# Self-directed Tutorial and Exercises: Using Postgres in Node

We use the [`pg`](https://node-postgres.com/) NPM package to access
Postgres in Node applications. This is similar to how we use the `mongoose` NPM
package to connect to MongoDB databases in Node.

## Part 0. Get ready

Make sure your local Postgres instance is running and create a new database
called `pg_node`.

Open this folder in your terminal and create an `env.sh` file that sets
the `DATABASE_URL` environment variable:

```sh
export DATABASE_URL="postgresql://localhost/pg_node"
```

## Part 1. Connecting

Edit `pool.js` and establish a connection to Postgres using the
`pg` NPM package. You'll need to use the `pg.Pool` object.

![Postgres pool setup screenshot](img/pool1.png)

Then run `pool.js` in your terminal to verify that your setup is correct.
You should see:

```
node pool.js
Success, you are connected to Postgres
```

<details><summary>
Aside: Connection pooling
</summary><p>

For SQL databases, database connections are a precious commodity.
Behind the scenes `pg.Pool` creates multiple connections to the database
and re-uses these connections efficiently across requests.

</p></details>

## Part 2. Run queries

Edit `query.js` and use the `pg.Pool` object we set up in Part 1 to
execute the following SQL queries in the following order.

1. ```sql
CREATE TABLE IF NOT EXISTS animals (
  name TEXT PRIMARY KEY,
  favorite_fool TEXT NOT NULL,
  sound TEXT NOT NULL
)
```
1. ```sql
INSERT INTO animals VALUES
  ('donkey', 'carrots', 'hee-haw'),
  ('cow', 'grass', 'moo'),
  ('duck', 'quack', 'seeds') ON CONFLICT DO NOTHING
```

1. ```sql
TEST
```


## Part 3. Run queries inside express

TODO

## Part 4. Parameterized queries

TODO
