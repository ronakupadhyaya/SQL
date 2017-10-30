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

## Part 3. Run queries inside express

## Part 4. Parameterized queries
