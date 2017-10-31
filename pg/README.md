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

`pg` manages connections to Postgres through [the `pg.Pool` object.](https://node-postgres.com/features/pooling)
Just like with `mongoose.connect()` we need to initialize `pg.Pool` with a connection
string to tell it which database to connect to.

<details><summary>
**Aside:** Connection pooling
</summary><p>

`pg.Pool` actually creates multiple connections to the database behind
the scenes. This allows our application to handle more requests simultaneously
than a single connection would allow.

This is called connection pooling and is essential to making SQL databases
scale.

</p></details>

### Exercise

Edit `pool.js` and establish a connection to Postgres using the
`pg` NPM package. You'll need to use the `pg.Pool` object.

![Postgres pool setup screenshot](img/pool1.png)

Then run `pool.js` in your terminal to verify that your setup is correct.
You should see:

```
node pool.js
Success, you are connected to Postgres
```

## Part 2. Run queries

Once initialized, `pg.Pool` allows us to make queries using the
[query() function](https://node-postgres.com/features/pooling#single-query).

You can use `query()` with callbacks:

```javascript
pool.query('SELECT * FROM users', function(err, result) {
});
```

You can also use `query()` with promises:

```javascript
pool.query('SELECT * FROM users')
.then(function(result) {
})
.catch(function(err) {
});
```

If `query()` is successful, `result` will be a
[`pg.Result` object](https://node-postgres.com/api/result).
You can read the data returned from the database under `result.rows`.

`result.rows` is an array of objects where each object corresponds to a
a row in the database. The row object will contain a key for each column
returned.

For example, say we had a `users` table that contained the following rows:

| firstName | lastName |
| :------------- | :------------- |
| Moose | Paksoy |
| Pam | Needle |
| Prath | Desai |

Then `result.rows` for the query `SELECT * FROM users` would be:

```javascript
[
    {firstName: 'Moose', lastName: 'Paksoy'},
    {firstName: 'Pam', lastName: 'Needle'},
    {firstName: 'Prath', lastName: 'Desai'}
]
```

So if you wanted to read the last name of the 2nd row you could just
do `result.rows[1].lastName`.

### Exercise

Let's use `pg.Pool` to create, populate and read data from a table.


1. Export the `pool` variable in `pool.js`

    ```javascript
    module.exports = pool;
    ```

1. Edit `query.js` and import `pool` from `pool.js` using `require()`.
1. Execute the following SQL queries one after another using promises:
    1. Create an animals table that contains 3 columns:
        1. `name`, type `TEXT`
        1. `food`, type `TEXT`
        1. `sound`, type `TEXT`
    1. Insert 3 animals into the animals table:
        1. name: `'donkey'`, food: `'carrots'`, sound: `'hee-haw'`
        1. name: `'cow'`, food: `'grass'`, sound: `'moo'`
        1. name: `'duck'`, food: `'seeds'`, sound: `'quack'`
    1. Get the animal that makes the sound `'moo'` and log its name to the console.

When you run `query.js` in node you should see:

```
node query.js
Success, you are connected to Postgres
The animal name is: cow
```

## Part 3. Run queries inside express

TODO


### Exercises

## Part 4. Parameterized queries

TODO

[Parameterized query documentation](https://node-postgres.com/features/queries#parameterized-query)

### Exercises

TODO
